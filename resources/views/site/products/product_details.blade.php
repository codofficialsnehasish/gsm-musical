@extends('layouts.web-app')
@section('style')
<style>
    .star-rating {
        direction: rtl;
        display: inline-block;
        cursor: pointer;
    }

    .star-rating input {
        display: none;
    }

    .star-rating label {
        color: #ddd;
        font-size: 24px;
        padding: 0 2px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .star-rating label:hover,
    .star-rating label:hover~label,
    .star-rating input:checked~label {
        color: #ffc107;
    }
</style>
@endsection
@section('title')
    Product Details
@endsection

@section('content')

    <!-- Page item Area -->
    <div id="page_item_area">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 text-left">
                    <h3>Shop Details</h3>
                </div>
                <div class="col-sm-6 text-right">
                    <ul class="p_items">
                        <li><a href="{{ route('home') }}">home</a></li>
                        <li><a href="#">products</a></li>
                        <li><span>{{ $product->name }}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Product Details Area  -->
    <div class="prdct_dtls_page_area">
        <div class="container">
            <div class="row">
                <!-- Product Details Image -->
                {{-- <div class="col-md-6 col-xs-12">
                <div class="pd_img fix">
                    <a class="venobox" href="{{ getProductMainImage($product->id) }}"><img src="{{ getProductMainImage($product->id) }}" alt=""/></a>
                </div>
            </div> --}}
                <div class="col-md-6 col-xs-12">
                    <div class="pd_img fix">
                        @include('site.products._preview')
                    </div>
                </div>
                <!-- Product Details Content -->
                <div class="col-md-6 col-xs-12">
                    <div class="prdct_dtls_content">
                        <a class="pd_title" href="#">{{ $product->name }}</a>
                        <div class="pd_price_dtls fix">
                            <!-- Product Price -->
                            <div class="pd_price">
                                <span class="new" id="dynamic-price">Rs {{ $product->total_price }}</span>
                                {{-- <span class="new">Rs <span id="dynamic-price"> {{ $product->total_price }}</span></span> --}}
                                <span class="old">({{ $product->price }})</span>
                            </div>
                            <!-- Product Ratting -->
                           
                        </div>
                        <div class="pd_ratngs">
                            <div class="rtngss">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                            </div>
                        </div>
                        <div class="pd_text">
                            <h4>overview:</h4>
                            {!! $product->sort_description !!}
                        </div>
                        <div class="d-flex">
                        <div class="pd_clr_qntty_dtls fix">
                            {{-- <div class="pd_clr">
                            <h4>color:</h4>
                            <a href="#" class="active" style="background: #ffac9a;">color 1</a>
                            <a href="#" style="background: #ddd;">color 2</a>
                            <a href="#" style="background: #000000;">color 3</a>
                          </div> --}}
                            @if ($product->product_type == 'attribute')
                                @foreach ($product->variations as $variation)
                                    <div class="pd_clr">
                                        <h4>{{ $variation->name }}:</h4>
                                        <div class="d-flex">
                                        @foreach ($variation->options as $option)
                                            @if ($option->variation_type == 'color')
                                                <a href="#" class="color-option variation-option"
                                                    data-option-id="{{ $option->id }}" 
                                                    data-price="{{ $option->price }}"
                                                    data-variation-id="{{ $variation->id }}"
                                                    data-variation-name="{{ $variation->name }}"
                                                    data-option-value="{{ $option->value }}"
                                                    data-image-url="{{ $product->media->firstWhere('custom_properties.option_id', $option->id)?->getUrl() }}"
                                                    style="background: {{ $option->value }};">
                                                </a>
                                            @elseif($option->variation_type == 'image')
                                                <a href="#" class="image-option variation-option"
                                                    data-option-id="{{ $option->id }}"
                                                    data-price="{{ $option->price }}"
                                                    data-variation-id="{{ $variation->id }}"
                                                    data-variation-name="{{ $variation->name }}"
                                                    data-option-value="{{ $option->value }}"
                                                    data-image-url="{{ $product->media->firstWhere('custom_properties.option_id', $option->id)?->getUrl() }}">
                                                    <img src="{{ asset('storage/' . $option->value) }}"
                                                        alt="{{ $option->value }}" width="30" height="30">
                                                </a>
                                            @else
                                                <a href="#" class="text-option variation-option"
                                                    data-option-id="{{ $option->id }}"
                                                    data-price="{{ $option->price }}"
                                                    data-variation-id="{{ $variation->id }}"
                                                    data-variation-name="{{ $variation->name }}"
                                                    data-option-value="{{ $option->value }}"
                                                    data-image-url="{{ $product->media->firstWhere('custom_properties.option_id', $option->id)?->getUrl() }}">
                                                    {{ $option->value }}
                                                </a>
                                            @endif
                                        @endforeach
                                        </div>
                                    </div>
                                @endforeach
                            @endif
                            <input type="hidden" id="selected-variation-id" value="">

                            <div class="pd_qntty_area">
                                <h4>quantity:</h4>
                                <div class="pd_qty fix">
                                    <input value="1" name="qttybutton" class="cart-plus-minus-box"
                                        id="quantity_6041ce9eca5d6" type="number">
                                </div>
                            </div>
                        </div>
                        <!-- Product Action -->
                        <div class="pd_btn fix" style="justify-content: end;display: flex;align-items: end;margin-bottom: 49px;">
                            <a class="btn btn-default acc_btn add-to-cart-btn" data-product-id="{{ $product->id }}"
                                data-product-type="{{ $product->product_type }}">add to bag</a>
                            <a class="btn btn-default acc_btn btn_icn add-to-wishlist"
                                data-product-id="{{ $product->id }}" data-product-type="{{ $product->product_type }}"><i
                                    class="fa fa-heart"></i></a>
                            {{-- <a class="btn btn-default acc_btn btn_icn"><i class="fa fa-refresh"></i></a> --}}
                        </div>
                    </div>
                        {{-- <div class="pd_share_area fix">
                            <h4>share this on:</h4>
                            <div class="pd_social_icon">
                                <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
                                <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                                <a class="vimeo" href="#"><i class="fa fa-vimeo"></i></a>
                                <a class="google_plus" href="#"><i class="fa fa-google-plus"></i></a>
                                <a class="tumblr" href="#"><i class="fa fa-tumblr"></i></a>
                                <a class="pinterest" href="#"><i class="fa fa-pinterest"></i></a>
                            </div>
                        </div> --}}
                    </div>
                </div>
            </div>

          
        </div>
    </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="pd_tab_area fix">
                    <ul class="pd_tab_btn nav nav-tabs" role="tablist">
                        <li>
                            <a class="active" href="#description" role="tab" data-toggle="tab">Description</a>
                        </li>
                        <li>
                            <a href="#specifications" role="tab" data-toggle="tab">Specifications</a>
                        </li>
                        <li>
                            <a href="#videos" role="tab" data-toggle="tab">Videos</a>
                        </li>
                        <li>
                            <a href="#reviews" role="tab" data-toggle="tab">Reviews</a>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade show active" id="description">
                            {!! $product->long_description !!}
                        </div>

                        <div role="tabpanel" class="tab-pane fade" id="specifications">
                            <ul class="check-list">
                                @foreach($product->specifications as $spec)
                                <li class="check-list__item">
                                    <i class="fa fa-arrow-circle-right"></i>
                                    <span class="custom-attribute-name">{{ $spec->title }}</span>
                                    :
                                    <span class="custom-attribute-value">{{ $spec->description }}</span> 
                                </li>
                                @endforeach
                            </ul>
                        </div>

                        <div role="tabpanel" class="tab-pane fade" id="videos">
                            @foreach($product->video as $spec)
                            {!! $spec->video_link !!}
                            @endforeach
                        </div>

                        <div role="tabpanel" class="tab-pane fade" id="reviews">
                            <div class="pda_rtng_area fix">
                                @php
                                    $approvedReviews = $product->reviews()->where('is_approved', false);
                                    $reviewCount = $approvedReviews->count();
                                    $averageRating = $reviewCount > 0 ? number_format($approvedReviews->avg('rating'), 1) : '0.0';
                                @endphp

                                <h4>{{ $averageRating }} <span>(Overall)</span></h4>
                                <span>
                                    @if($reviewCount > 0)
                                        Based on {{ $reviewCount }} {{ Str::plural('Comment', $reviewCount) }}
                                    @else
                                        No reviews yet
                                    @endif
                                </span>
                            </div>

                            @if($reviewCount > 0)
                                <div class="rtng_cmnt_area fix">
                                    @foreach($approvedReviews->latest()->get() as $review)
                                        <div class="single_rtng_cmnt">
                                            <div class="rtngs">
                                                @for($i = 1; $i <= 5; $i++)
                                                    @if($i <= $review->rating)
                                                        <i class="fa fa-star"></i>
                                                    @else
                                                        <i class="fa fa-star-o"></i>
                                                    @endif
                                                @endfor
                                                <span>({{ $review->rating }})</span>
                                            </div>
                                            <div class="rtng_author">
                                                <h3>{{ $review->user->name ?? 'Anonymous' }}</h3>
                                                <span>{{ $review->created_at->format('H:i') }}</span>
                                                <span>{{ $review->created_at->format('j F Y') }}</span>
                                            </div>
                                            <p>{{ $review->comment }}</p>
                                        </div>
                                    @endforeach
                                </div>
                            @endif

                            @auth
                            <div class="col-md-6 rcf_pdnglft">
                                <div class="rtng_cmnt_form_area fix">
                                    <h3>Add your Comments</h3>
                                    <div class="rtng_form">
                                        <form action="{{ route('reviews.store', $product) }}" method="POST" enctype="multipart/form-data">
                                            @csrf
                                            <div class="star-rating animated-stars">
                                                <input type="radio" id="star5" name="rating" value="5">
                                                <label for="star5" class="fa-solid fa-star"></label>
                                                <input type="radio" id="star4" name="rating" value="4">
                                                <label for="star4" class="fa-solid fa-star"></label>
                                                <input type="radio" id="star3" name="rating" value="3">
                                                <label for="star3" class="fa-solid fa-star"></label>
                                                <input type="radio" id="star2" name="rating" value="2">
                                                <label for="star2" class="fa-solid fa-star"></label>
                                                <input type="radio" id="star1" name="rating" value="1">
                                                <label for="star1" class="fa-solid fa-star"></label>
                                            </div>
                                            {{-- <div class="input-area">
                                                <input type="text" name="title" placeholder="Summarize your review" required>
                                            </div> --}}
                                            <div class="input-area">
                                                <textarea name="comment" placeholder="What did you like or dislike? What should other customers know?" required></textarea>
                                            </div>
                                            {{-- <div class="input-area">
                                                <label>Upload Photos (Optional)</label>
                                                <div class="image-upload-container">
                                                    <input type="file" id="review-images" name="images[]" multiple accept="image/*">
                                                </div>
                                            </div> --}}
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="recommend-product" name="recommend" value="1">
                                                <label class="form-check-label" for="recommend-product">I recommend this product</label>
                                            </div>
                                            <input class="btn border-btn" type="submit" value="Add Review" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            @else
                                <div class="alert alert-info">
                                    Please <a href="{{ route('login') }}">login</a> to leave a review.
                                </div>
                            @endauth
                             
                            {{-- <div class="review-container">
                                <!-- Review Summary -->
                                <div class="review-summary">
                                    <div class="overall-rating">
                                        <h4>
                                            @if($product->reviews()->where('is_approved', true)->count() > 0)
                                                @php
                                                    $averageRating = $product->reviews()->where('is_approved', true)->avg('rating');
                                                    $averageRating = number_format($averageRating, 1);
                                                @endphp
                                                <span class="rating-value">{{ $averageRating }}</span>
                                                <span class="rating-stars">
                                                    @for($i = 1; $i <= 5; $i++)
                                                        @if($i <= floor($averageRating))
                                                            <i class="fa fa-star"></i>
                                                        @elseif($i - 0.5 <= $averageRating)
                                                            <i class="fa fa-star-half-o"></i>
                                                        @else
                                                            <i class="fa fa-star-o"></i>
                                                        @endif
                                                    @endfor
                                                </span>
                                                <span class="rating-count">(Based on {{ $product->reviews()->where('is_approved', true)->count() }} Reviews)</span>
                                            @else
                                                <span class="rating-value">0.0</span>
                                                <span class="rating-stars">
                                                    @for($i = 1; $i <= 5; $i++)
                                                        <i class="fa fa-star-o"></i>
                                                    @endfor
                                                </span>
                                                <span class="rating-count">(No reviews yet)</span>
                                            @endif
                                        </h4>
                                    </div>
                                    
                                    @if($product->reviews()->where('is_approved', true)->count() > 0)
                                        <div class="rating-distribution">
                                            @php
                                                // Calculate rating distribution
                                                $totalReviews = $product->reviews()->where('is_approved', true)->count();
                                                $ratingDistribution = [];
                                                for ($i = 5; $i >= 1; $i--) {
                                                    $count = $product->reviews()->where('is_approved', true)->where('rating', $i)->count();
                                                    $percentage = $totalReviews > 0 ? round(($count / $totalReviews) * 100) : 0;
                                                    $ratingDistribution[$i] = $percentage;
                                                }
                                            @endphp
                                            
                                            @for($i = 5; $i >= 1; $i--)
                                                <div class="rating-bar">
                                                    <span class="rating-label">{{ $i }} Stars</span>
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" style="width: {{ $ratingDistribution[$i] }}%"></div>
                                                    </div>
                                                    <span class="rating-percent">{{ $ratingDistribution[$i] }}%</span>
                                                </div>
                                            @endfor
                                        </div>
                                    @endif
                                </div>

                                <!-- Reviews List -->
                                <div class="reviews-list">
                                    <div class="review-header">
                                        <h3>Customer Reviews</h3>
                                        <div class="sort-options">
                                            <select class="form-control" id="review-sort">
                                                <option value="newest">Most Recent</option>
                                                <option value="highest">Highest Rated</option>
                                                <option value="lowest">Lowest Rated</option>
                                                <option value="helpful">Most Helpful</option>
                                            </select>
                                        </div>
                                    </div>

                                    @foreach($reviews as $review)
                                        <div class="single-review">
                                            <div class="review-meta">
                                                <div class="review-rating">
                                                    <div class="stars">
                                                        @for($i = 1; $i <= 5; $i++)
                                                            @if($i <= $review->rating)
                                                                <i class="fa fa-star"></i>
                                                            @else
                                                                <i class="fa fa-star-o"></i>
                                                            @endif
                                                        @endfor
                                                        <span class="rating-text">{{ $review->rating }}/5</span>
                                                    </div>
                                                    @if($review->is_verified)
                                                        <span class="verified-purchase">Verified Purchase</span>
                                                    @endif
                                                </div>
                                                <div class="review-author">
                                                    <h4>{{ $review->user->name }}</h4>
                                                    <span class="review-date">{{ $review->created_at->format('F j, Y') }}</span>
                                                </div>
                                            </div>
                                            <div class="review-content">
                                                <h5 class="review-title">{{ $review->title }}</h5>
                                                <p>{{ $review->comment }}</p>
                                                
                                                @if($review->images->count() > 0)
                                                    <div class="review-images">
                                                        @foreach($review->images as $image)
                                                            <img src="{{ Storage::url($image->image_path) }}" alt="Review image">
                                                        @endforeach
                                                    </div>
                                                @endif
                                                
                                                <div class="review-helpful">
                                                    <span>Was this review helpful?</span>
                                                    <button class="btn-helpful" data-review-id="{{ $review->id }}" data-helpful="1">
                                                        Yes (<span class="helpful-count">{{ $review->helpful_count }}</span>)
                                                    </button>
                                                    <button class="btn-helpful" data-review-id="{{ $review->id }}" data-helpful="0">
                                                        No (<span class="not-helpful-count">{{ $review->not_helpful_count }}</span>)
                                                    </button>
                                                    <button class="btn-report">Report</button>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach

                                    <!-- Pagination -->
                                    <div class="review-pagination">
                                        {{ $reviews->links() }}
                                    </div>
                                </div>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Related Product Area -->
    <div class="related_prdct_area text-center">
        <div class="container">
            <!-- Section Title -->
            <div class="rp_title text-center">
                <h3>Related products</h3>
            </div>

            <div class="row">
                <div id="testimonial-slider3" class="owl-carousel">
                @foreach ($relatedProducts as $relatedProduct)
                    <div class="col-lg-12 col-md-4 col-sm-6">
                        <div class="single_product">
                            <div class="product_image">
                                <a href="{{ route('product.details', $relatedProduct->slug) }}">
                                    <img src="{{ getProductMainImage($relatedProduct->id) }}" alt="" />
                                    {{-- <div class="new_badge">New</div> --}}
                                    <a href="javascript:void(0)" class="add-to-wishlist new_badge1"
                                    data-product-id="{{ $relatedProduct->id }}"><i class="fa fa-heart-o"></i></a>
                                </a>
                                {{-- <div class="box-content"> --}}
                                   
                                    {{-- <a href="javascript:void(0)" class="add-to-cart-btn" data-product-id="{{ $relatedProduct->id }}"><i class="fa fa-cart-plus"></i></a> --}}
                                    {{-- <a href="{{ route('product.details', $relatedProduct->slug) }}"><i
                                            class="fa fa-search"></i></a> --}}
                                {{-- </div> --}}
                            </div>

                            <div class="product_btm_text">
                                <h4><a
                                        href="{{ route('product.details', $relatedProduct->slug) }}">{{ $relatedProduct->name }}</a>
                                </h4>
                                <div class="p_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <p class="price">Rs {{ $relatedProduct->total_price }}</p>
                                <button><i class="fa-solid fa-cart-shopping add-to-cart-btn" data-product-id="{{ $relatedProduct->id }}"></i></button>
                            </div>
                        </div>
                    </div> <!-- End Col -->
                @endforeach
                </div>
            </div>
        </div>
    </div>

@endsection