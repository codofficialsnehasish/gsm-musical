@extends('layouts.web-app')

@section('title') Cart @endsection

@section('content')

<!-- Page item Area -->
<div id="page_item_area">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 text-left">
                <h3>Cart Details</h3>
            </div>		

            <div class="col-sm-6 text-right">
                <ul class="p_items">
                    <li><a href="{{ route('home') }}">home</a></li>
                    <li><span>Cart</span></li>
                </ul>					
            </div>	
        </div>
    </div>
</div>

<!-- Cart Page -->
<div class="cart_page_area">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="cart_table_area table-responsive">
                    <table class="table cart_prdct_table text-center">
                        <thead>
                            <tr>
                                <th class="cpt_no">No.</th>
                                <th class="cpt_img">image</th>
                                <th class="cpt_pn">product name</th>
                                <th class="cpt_q">quantity</th>
                                <th class="cpt_p">price</th>
                                <th class="cpt_t">total</th>
                                <th class="cpt_r">remove</th>
                            </tr>
                        </thead>
                        {{-- <tbody>
                            @foreach($carts as $cart_item)
                            <tr data-id="{{ $cart_item->id }}">
                                <td><span class="cp_no">{{ $loop->iteration }}</span></td>
                                <td><a href="{{ route('product.details',$cart_item->product?->slug) }}" class="cp_img"><img src="{{ getProductMainImage($cart_item->product?->id) }}" alt="" /></a></td>
                                <td><a href="{{ route('product.details',$cart_item->product?->slug) }}" class="cp_title">{{ $cart_item->product?->name }}</a></td>
                                <td>										
                                    <div class="cp_quntty">																			
                                        <input name="quantity" value="{{ $cart_item->quantity }}" class="qty" size="2" type="number">													
                                    </div>
                                </td>
                                <td><p class="cp_price">Rs {{ $cart_item->product?->total_price }}</p></td>
                                <td><p class="cpp_total">Rs {{ $cart_item->product?->total_price * $cart_item->quantity }}</p></td>
                                <td><a class="btn btn-default cp_remove"><i class="fa fa-trash"></i></a></td>
                            </tr>
                            @endforeach
                        </tbody> --}}
                        <tbody>
                            @foreach($carts as $cart_item)
                            <tr data-id="{{ $cart_item->id }}">
                                <td><span class="cp_no">{{ $loop->iteration }}</span></td>
                                <td><a href="{{ route('product.details', $cart_item->product?->slug) }}" class="cp_img"><img src="{{ getProductMainImage($cart_item->product?->id) }}" alt="" /></a></td>
                                <td>
                                    <a href="{{ route('product.details', $cart_item->product?->slug) }}" class="cp_title">
                                        {{ $cart_item->product?->name }} 
                                        @if($cart_item->productVariationOption)
                                            ({{ $cart_item->productVariationOption->variation_name }})
                                        @endif
                                    </a>
                                </td>
                                <td>										
                                    <div class="cp_quntty">																			 
                                        <input name="quantity" value="{{ $cart_item->quantity }}" class="qty" size="2" type="number">													
                                    </div>
                                </td>
                                <td>
                                    @if($cart_item->productVariationOption)
                                        <p class="cp_price">Rs {{ $cart_item->productVariationOption->price }}</p>
                                    @else
                                        <p class="cp_price">Rs {{ $cart_item->product?->total_price }}</p>
                                    @endif
                                </td>
                                <td><p class="cpp_total">
                                    @if($cart_item->productVariationOption)
                                        Rs {{ $cart_item->productVariationOption->price * $cart_item->quantity }}
                                    @else
                                        Rs {{ $cart_item->product?->total_price * $cart_item->quantity }}
                                    @endif
                                </p></td>
                                <td><a class="btn btn-default cp_remove"><i class="fa fa-trash"></i></a></td>
                            </tr>
                            @endforeach
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-8 col-xs-12 cart-actions cart-button-cuppon">
                <div class="row">
                    <div class="col-sm-7">
                        <div class="cart-action">
                            <a href="{{ route('product.all') }}" class="btn border-btn">continiue shopping</a>
                            <a href="javascript:void(0)" onclick="location.reload()" class="btn border-btn">update shopping bag</a>
                        </div>
                    </div>
                    
                    <div class="col-sm-5">
                        <div class="cuppon-wrap">
                            <h4>Discount Code</h4>
                            <p>Enter your coupon code if you have</p>
                            <form id="applyCouponForm">
                                @csrf
                                <input type="text" id="coupon_code" name="coupon_code" placeholder="Enter coupon code" />
                                <button type="submit" class="btn border-btn">Apply Coupon</button>
                            </form>
                            <p id="coupon-message"></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4 col-xs-12 cart-checkout-process text-right">
                <div class="wrap">
                    <p><span>Subtotal</span><span id="cart-subtotal">Rs {{ calculate_cart_total() }}</span></p>
                    <h4><span>Grand total</span><span id="cart-grandtotal">Rs {{ calculate_cart_total() }}</span></h4>
                    <a href="{{ route('checkout') }}" class="btn border-btn">process to checkout</a>
                </div>
            </div>
            
        </div>
    </div>
</div>

<!--  Process -->
<section class="process_area section_padding gradient_section">
    <div class="container">
        <div class="row text-center">		
            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                <div class="single-process">
                    <!-- process Icon -->
                    <div class="picon"><i class="fa fa-truck"></i></div>
                    <!-- process Content -->
                    <div class="process_content">
                        <h3>free shipping</h3>
                        <p>Lorem ipsum dummy</p>
                    </div>
                </div>	
            </div>	<!-- End Col -->				

            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                <div class="single-process">
                    <!-- process Icon -->
                    <div class="picon"><i class="fa fa-money"></i></div>
                    <!-- process Content -->
                    <div class="process_content">
                        <h3>Cash On Delivery</h3>
                        <p>Lorem ipsum dummy</p>
                    </div>
                </div>	
            </div>	<!-- End Col -->				

            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                <div class="single-process">
                    <!-- process Icon -->
                    <div class="picon"><i class="fa fa-headphones "></i></div>
                    <!-- process Content -->
                    <div class="process_content">
                        <h3>Support 24/7</h3>
                        <p>Lorem ipsum dummy</p>
                    </div>
                </div>	
            </div>	<!-- End Col -->				

            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                <div class="single-process">
                    <!-- process Icon -->
                    <div class="picon"><i class="fa fa-clock-o"></i></div>
                    <!-- process Content -->
                    <div class="process_content">
                        <h3>Opening All Week</h3>
                        <p>Lorem ipsum dummy</p>
                    </div>
                </div>	
            </div>	<!-- End Col -->
            
        </div>
    </div>
</section>
<!--  End Process -->

@endsection

@section('script')
<script>
    $(document).ready(function () {
        $("#applyCouponForm").submit(function (e) {
            e.preventDefault();
            let couponCode = $("#coupon_code").val();

            $.ajax({
                url: "{{ route('cart.apply.coupon') }}",
                type: "POST",
                data: {
                    _token: "{{ csrf_token() }}",
                    coupon_code: couponCode
                },
                success: function (response) {
                    if (response.success) {
                        showToast('success', 'Success', response.message);
                        $("#cart-grandtotal").text("Rs " + response.new_total);
                    } else {
                        showToast('error', 'Error', response.message);
                    }
                }
            });
        });
    });

</script>
@endsection