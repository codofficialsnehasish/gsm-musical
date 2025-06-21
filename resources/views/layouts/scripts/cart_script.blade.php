<script>
    $(document).ready(function() {
        let selectedVariationId = null;
        let selectedVariations = {};

        // Handle variation selection
        // $(".variation-option").on("click", function (e) {
        //     e.preventDefault();

        //     // Get selected price and ID
        //     selectedVariationId = $(this).data("option-id");
        //     let newPrice = $(this).data("price");

        //     // Update UI
        //     $("#dynamic-price").text('Rs '+newPrice);
        //     $("#selected-variation-id").val(selectedVariationId);

        //     // Remove active class from all and add to selected
        //     $(".variation-option").removeClass("active");
        //     $(this).addClass("active");
        // });

    
        // Initialize the gallery
        var gcInstance;
        $('#glasscase').glassCase({
            'thumbsPosition': 'bottom',
            'widthDisplay': 560
        });
        gcInstance = $('#glasscase').data('gcglasscase');

        // Store image dimensions with fallback
        var imageDimensions = {};

        // Handle variation selection
        $('.variation-option').click(function(e) {
            e.preventDefault();
            
            if ($(this).hasClass('disabled')) return;
            
            // Update active state
            $('.variation-option').removeClass('active');
            $(this).addClass('active');
            
            // Get the image URL from the selected variation
            const imageUrl = $(this).data('image-url');
            
            // Update price if available
            selectedVariationId = $(this).data("option-id");
            const newPrice = $(this).data('price');
            if (newPrice) {
                $('#dynamic-price').text('Rs ' + newPrice);
            }
            
            // Update the display
            updateImageDisplay(imageUrl);
        });

        function updateImageDisplay(url) {
            if (!url) {
                console.error('No image URL provided');
                return;
            }

            // Show loading state
            gcInstance.gcDisplayContainer.addClass('gc-hide');
            gcInstance.addLoader(gcInstance.gcDisplayArea);
            
            // Check if we already have dimensions for this image
            if (imageDimensions[url]) {
                updateGalleryWithImage(url);
                return;
            }

            // Create new image to load
            var newImg = new Image();
            
            newImg.onload = function() {
                // Store dimensions
                imageDimensions[url] = {
                    width: this.width,
                    height: this.height,
                    isLoaded: true
                };
                updateGalleryWithImage(url);
            };
            
            newImg.onerror = function() {
                console.warn('Failed to load image, using fallback:', url);
                
                // Use fallback dimensions
                imageDimensions[url] = {
                    width: gcInstance.config.widthDisplay,
                    height: gcInstance.config.heightDisplay,
                    isLoaded: false
                };
                
                // Try to find an alternative image
                const fallbackUrl = findFallbackImage();
                if (fallbackUrl && fallbackUrl !== url) {
                    updateImageDisplay(fallbackUrl);
                    return;
                }
                
                updateGalleryWithImage(url);
            };
            
            newImg.src = url;
        }

        function updateGalleryWithImage(url) {
            // Ensure we have dimensions
            if (!imageDimensions[url]) {
                imageDimensions[url] = {
                    width: gcInstance.config.widthDisplay,
                    height: gcInstance.config.heightDisplay,
                    isLoaded: false
                };
            }

            // Update current image data
            gcInstance.gcImageData[gcInstance.current] = imageDimensions[url];
            
            // Update the main display
            gcInstance.gcDisplayDisplay.attr('src', url);
            gcInstance.gcZoomDisplay.attr('src', url);
            
            // Refresh gallery components
            gcInstance.setupDisplayDisplay();
            gcInstance.setupLens();
            gcInstance.setupZoomPos();
            
            // Hide loader
            gcInstance.removeLoader(gcInstance.gcDisplayArea);
            gcInstance.gcDisplayContainer.removeClass('gc-hide');
            
            // Highlight thumbnail
            highlightThumbnail(url);
        }

        function findFallbackImage() {
            // Try to find the first available image in thumbnails
            const firstThumb = $('#glasscase img').first();
            if (firstThumb.length) {
                return firstThumb.attr('src');
            }
            
            // Try to find the default product image
            const defaultImage = $('.variation-option[data-image-url]').first().data('image-url');
            if (defaultImage) {
                return defaultImage;
            }
            
            return null;
        }

        function highlightThumbnail(url) {
            if (!url) return;
            
            // Remove active class from all thumbnails
            $('#glasscase li').removeClass('gc-active');
            
            // Find and highlight the matching thumbnail
            $('#glasscase img').each(function() {
                if ($(this).attr('src') === url) {
                    $(this).closest('li').addClass('gc-active');
                    
                    // Ensure thumbnail is visible
                    scrollToThumbnail($(this).closest('li'));
                    return false;
                }
            });
        }

        function scrollToThumbnail(thumbnail) {
            const container = $('#glasscase').parent();
            const containerWidth = container.width();
            const thumbPos = thumbnail.position().left;
            const thumbWidth = thumbnail.outerWidth();
            
            if (thumbPos < 0 || thumbPos + thumbWidth > containerWidth) {
                container.animate({
                    scrollLeft: thumbPos
                }, 300);
            }
        }
        
        // Initialize with first available image
        const firstImageUrl = $('.variation-option[data-image-url]').first().data('image-url');
        if (firstImageUrl) {
            updateImageDisplay(firstImageUrl);
        } else {
            console.error('No image URLs found in variation options');
        }


        $('.add-to-cart-btn').on('click', function() {
            var productId = $(this).data('product-id');
            let isAttributeProduct = $(this).data('product-type') == 'attribute' ? true : false;
            var quantity = $('#quantity_6041ce9eca5d6').val();

            if (isAttributeProduct && !selectedVariationId) {
                alert("Please select a variation before adding to cart.");
                return;
            }
            
            if (!quantity || quantity === '') {
                quantity = 1;
            }

            // Send AJAX request
            $.ajax({
                url: "{{ route('add-to-cart') }}",
                type: 'POST',
                data: {
                    _token: '{{ csrf_token() }}',
                    product_id: productId,
                    variation_id: isAttributeProduct ? selectedVariationId : null,
                    quantity: quantity
                },
                success: function(response) {
                    if (response.status === "true") {
                        updateCartTotal();
                        updateCartCount();
                        update_mini_cart_wrapper();
                        showToast('success', 'Success', response.massage);
                    } else {
                        showToast('error', 'Error', response.massage);
                    }
                },
                error: function(xhr, status, error) {
                    if (xhr.status === 422) {
                        let errors = xhr.responseJSON.errors;
                        let errorMessages = '';

                        // Loop through errors and append to the message
                        $.each(errors, function (key, value) {
                            errorMessages += value[0] + '<br>';
                        });

                        // Show all error messages
                        showToast('error', 'Error', errorMessages);
                    } else {
                        // Show generic error message
                        showToast('error', 'Error', "Something went wrong. Please try again.");
                    }
                }
            });
        });

        $('.qty').on('change', function () {
            const button = $(this);
            const input = $(this);
            let quantity = parseInt(input.val());
            const cartId = button.closest('tr').data('id');

            $.ajax({
                url: "{{ route('cart.update',':id') }}".replace(':id', cartId),
                type: 'PATCH',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                },
                data: { quantity: quantity },
                success: function (response) {
                    // Update cart total price in the table
                    const totalPrice = response.total_price;
                    button.closest('tr').find('.cpp_total').text('₹' + totalPrice);

                    updateCartTotal();
                },
                error: function (error) {
                    showToast('error', 'Error', error.responseJSON.error);
                    input.val(1);
                }
            });
        });


        $('.cp_remove').on('click', function () {
            const cartId = $(this).closest('tr').data('id');
            $.ajax({
                url: "{{ route('cart.delete', ':id') }}".replace(':id', cartId),
                type: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (response) {
                    if (response.status === "true") {
                        updateCartTotal();
                        updateCartCount();
                        update_mini_cart_wrapper();
                        showToast('success', 'Success', response.massage);
                        $('tr[data-id="' + cartId + '"]').remove();
                    } else {
                        showToast('error', 'Error', "Failed to delete item from cart.");
                    }
                },
                error: function (xhr, status, error) {
                    if (xhr.status === 422) {
                        let errors = xhr.responseJSON.errors; // Get validation errors
                        let errorMessages = '';

                        // Loop through errors and append to the message
                        $.each(errors, function (key, value) {
                            errorMessages += value[0] + '<br>'; // Add each error message
                        });

                        // Show all error messages
                        showToast('error', 'Error', errorMessages);
                    } else {
                        // Show generic error message
                        showToast('error', 'Error', "Something went wrong. Please try again.");
                    }
                }
            });
        });


        function updateCartCount() {
            $.ajax({
                url: "{{ route('cart.count') }}",
                method: 'GET',
                success: function (response) {
                    if (response.count > 0) {
                        $('#cart-count').text(response.count).css('display', 'inline-block');
                    } else {
                        $('#cart-count').hide();
                    }
                },
                error: function () {
                    console.error('Failed to fetch cart count.');
                }
            });
        }

        function update_mini_cart_wrapper() {
            $.ajax({
                url: "{{ route('cart.cart_products') }}",
                method: 'GET',
                success: function (response) {
                    let miniCartWrapper = $('.mini-cart-wrapper');
                    let miniCartContent = '';

                    // Iterate through the response to build the cart items
                    response.forEach(function (cartItem) {
                        let product = cartItem.product;
                        let variationName = cartItem.variation_name;
                        let variationPrice = cartItem.variation_price;

                        // If a variation exists, include it in the display
                        let productName = variationName ? `${product.name} (${variationName})` : product.name;
                        let price = variationPrice ? variationPrice : (product.total_price || 0);

                        // Add each cart item to the mini-cart
                        miniCartContent += `
                            <div class="mc-sin-pro fix">
                                <a href="/product/details/${product.slug}" class="mc-pro-image float-left">
                                    <img src="${product.image_url || '/default-image.jpg'}" width="49" height="64" alt="${product.name}" />
                                </a>
                                <div class="mc-pro-details fix">
                                    <a href="/product/details/${product.slug}">${productName}</a>
                                    <span>${cartItem.quantity} x Rs ${price}</span>
                                </div>
                            </div>`;
                    });

                    // Calculate the subtotal
                    let subtotal = response.reduce((total, cartItem) => {
                        let product = cartItem.product;
                        let price = cartItem.variation_price || product.total_price; // Use variation price if available
                        return total + (cartItem.quantity * price);
                    }, 0).toFixed(2);

                    // Add subtotal and checkout button
                    miniCartContent += `
                        <div class="mc-subtotal fix">
                            <h4>Subtotal <span id="cart-total">Rs ${subtotal}</span></h4>
                        </div>
                        <div class="mc-button">
                            <a href="/checkout" class="checkout_btn">checkout</a>
                        </div>`;

                    // Update the mini-cart wrapper
                    miniCartWrapper.html(miniCartContent);

                },
                error: function () {
                    console.error('Failed to fetch cart products.');
                }
            });
        }


        function updateCartTotal() {
            $.ajax({
                url: "{{ route('cart.total') }}",
                method: 'GET',
                success: function (response) {
                    $('#cart-subtotal').text(response.total)
                    $('#cart-grandtotal').text(response.total)
                },
                error: function () {
                    console.error('Failed to fetch cart count.');
                }
            });
        }       
        
        

        // Call the function to update cart count on page load
        updateCartCount();
        updateCartTotal();
        update_mini_cart_wrapper();



        $('.add-to-wishlist').on('click', function() {

            let productId = $(this).data('product-id');
            let csrfToken = $('meta[name="csrf-token"]').attr('content');

            $.ajax({
                url: "{{ route('wishlist.add') }}",
                type: "POST",
                data: {
                    product_id: productId,
                    _token: csrfToken,
                },
                success: function (response) {
                    if (response.status === 'success') {
                        showToast('success', 'Success', response.message);
                    } else if (response.status === 'exists') {
                        showToast('warning', 'Warning', response.message);
                    }
                },
                error: function (xhr) {
                    if (xhr.status === 401) {
                        showToast('error', 'Error', "You need to log in to add items to your wishlist!");
                    } else {
                        showToast('error', 'Error', "Something went wrong. Please try again!");
                    }
                }
            });
        });


    });
</script>