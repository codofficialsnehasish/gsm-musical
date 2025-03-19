@extends('layouts.web-app')

@section('title') Home @endsection

@section('content')

<!-- Start Slider Area -->
@if($sliders->isNotEmpty())
<section id="slider_area" class="text-center">
    <div class="slider_active owl-carousel">
        @foreach($sliders as $slider)
        <div class="single_slide" style="background-image: url({{ $slider->getFirstMediaUrl('slider') }}); background-size: cover; background-position: center;">
            <div class="container">	
                <div class="single-slide-item-table">
                    <div class="single-slide-item-tablecell">
                        <div class="slider_content text-right slider-animated-1">						
                            <p class="animated">{{ $slider->title }}</p>
                            <h1 class="animated">{!! $slider->description !!}</h1>
                            <a href="{{ route('product.all') }}" class="btn main_btn animated">shop now</a>
                        </div>
                    </div>
                </div>						
            </div>
        </div>
        @endforeach
    </div>
</section>
@endif
<!-- End Slider Area -->		

<!--  Promo ITEM STRAT  -->
<section id="promo_area" class="section_padding">
    <div class="container">
        <div class="row">

            @if($categorys->isNotEmpty())
            <div class="col-md-12 text-center">
                <div class="section_title fws">						
                    <h2>Top <span>Categories</span></h2>						
                </div>
            </div>

            <div id="testimonial-slider2" class="owl-carousel">
                @foreach($categorys as $category)
                <div class="testimonial2">
                    <div class="pic">
                        <img src="{{ $category->getFirstMediaUrl('category') }}" alt="">
                        <h3 class="title">{{ $category->name }}</h3>
                    </div>
                </div>
                @endforeach
            </div>
            @endif



            <div class="col-lg-4 col-md-6 col-sm-12">	
                <a href="{{ route('product.all') }}">
                    <div class="single_promo">
                        <img src="{{ asset('assets/site-assets/img/promo/4.jpg') }}" alt="">
                        <div class="box-content">
                            <h3 class="title">Professional Sound</h3>
                            <span class="post">Shop Now</span>
                        </div>
                    </div>
                </a>						
            </div><!--  End Col -->						
            
            <div class="col-lg-8 col-md-6 col-sm-12">	
                <a href="{{ route('product.all') }}">
                    <div class="single_promo">
                        <img src="{{ asset('assets/site-assets/img/promo/5.jpg') }}" alt="">
                        <div class="box-content">
                            <h3 class="title">New Releases</h3>
                            <span class="post">Shop Now</span>
                        </div>
                    </div>	
                </a>	
                
            </div><!--  End Col -->					

        
        </div>			
    </div>		
</section>
<!--  Promo ITEM END -->	


<!-- Start product Area -->
<section id="product_area" class="section_padding">
    <div class="container">		
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="section_title mb-2">						
                    <h2>Our <span>Products</span></h2>
                </div>
            </div>
        </div>
    
        <div class="text-center">
            <div class="product_filter">
                <ul>
                    <li class=" active filter" data-filter="all">ALL</li>
                    @foreach ($categorys as $category)
                        <li class="filter" data-filter=".category-{{ $category->id }}">{{ $category->name }}</li>
                    @endforeach
                    {{-- <li class="filter" data-filter=".sale">Acoustic Guitar</li>
                    <li class="filter" data-filter=".bslr">Electric Guitar</li>
                    <li class="filter" data-filter=".ftrd">Ukeles</li> --}}
                </ul>
            </div>
            
            <div class="product_item">
                <div class="row">	
                    @foreach($all_products as $products)				
                    <div class="col-lg-3 col-md-4 col-sm-6 mix 
                        @foreach ($products->categories as $category)
                            category-{{ $category->id }} 
                        @endforeach ">
                        <div class="single_product">
                            <div class="product_image">
                                <a href="{{ route('product.details',$products->slug) }}">
                                    <img src="{{ getProductMainImage($products->id) }}" alt=""/>
                                    <div class="new_badge">New</div>
                                </a>
                                <div class="box-content">
                                    <a href="javascript:void(0)" class="add-to-wishlist" data-product-id="{{ $products->id }}"><i class="fa fa-heart-o"></i></a>
                                    {{-- <a href="javascript:void(0)" class="add-to-cart-btn" data-product-id="{{ $products->id }}"><i class="fa fa-cart-plus"></i></a> --}}
                                    <a href="{{ route('product.details',$products->slug) }}"><i class="fa fa-search"></i></a>
                                </div>										
                            </div>

                            <div class="product_btm_text">
                                <h4><a href="{{ route('product.details',$products->slug) }}">{{ $products->name }}</a></h4>
                                <div class="p_rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>										
                                <span class="price">Rs {{ $products->total_price }}</span>
    
                            </div>
                        </div>
                        
                    </div> <!-- End Col -->	
                    @endforeach

                </div>
            </div>
        </div>
    </div>
</section>
<!-- End product Area -->

<!-- Special Offer Area -->
<div class="special_offer_area gray_section">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-right">
                <div class="special_info">			
                    <h3>Home Studio Creation</h3>
                    <p>Made Affordable</p>							
                    <a href="{{ route('contact') }}" class="btn main_btn">Contact Now</a>					
                </div>
            </div>
        </div>

    </div>
</div> <!-- End Special Offer Area -->

<!-- Start Featured product Area -->
@if($featured_products->isNotEmpty())
<section id="featured_product" class="featured_product_area section_padding">
    <div class="container">		
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="section_title">						
                    <h2>Featured <span> Products</span></h2>
                </div>
            </div>
        </div>

        <div class="row text-center">		
            @foreach($featured_products as $featured_product)			
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="single_product">
                    <div class="product_image">
                        <a href="{{ route('product.details',$products->slug) }}">
                            <img src="{{ getProductMainImage($featured_product->id) }}" alt=""/>
                        </a>
                        <div class="box-content">
                            <a href="javascript:void(0)" class="add-to-wishlist" data-product-id="{{ $featured_product->id }}"><i class="fa fa-heart-o"></i></a>
                            {{-- <a href="javascript:void(0)" class="add-to-cart-btn" data-product-id="{{ $featured_product->id }}"><i class="fa fa-cart-plus"></i></a> --}}
                            <a href="{{ route('product.details',$products->slug) }}"><i class="fa fa-search"></i></a>
                        </div>										
                    </div>

                    <div class="product_btm_text">
                        <h4><a href="{{ route('product.details',$featured_product->slug) }}">{{ $featured_product->name }}</a></h4>
                        <span class="price">Rs {{ $featured_product->total_price }}</span>
                    </div>
                </div>								
            </div> 
            <!-- End Col -->	
            @endforeach
        </div>
    </div>
</section>
@endif
<!-- End Featured Products Area -->


<!--  Brand -->
@if($brands->isNotEmpty())
<section id="brand_area" class="text-center">
    <div class="container">					
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="section_title">						
                    <h2>Our <span>Brand</span></h2>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="brand_slide owl-carousel">
                    @foreach($brands as $brand)
                    <div class="item text-center"> <a href="{{ route('brands.products',$brand->slug) }}"><img src="{{ $brand->getFirstMediaUrl('brand') }}" alt="{{ $brand->name }}" class="img-responsive" /></a> </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>        
</section>   
@endif     
<!-- Brand end -->	


<!-- Testimonials Area -->
@if($testimonials->isNotEmpty())
<section id="testimonials" class="testimonials_area section_padding">
    <div class="container">
        <div class="row">
            <div class="col-md-4"><img src="{{ asset('assets/site-assets/img/review.png') }}" alt="" class="img-responsive" /></a></div>
            <div class="col-md-8">

                <div class="rivwq">
                    <img src="{{ asset('assets/site-assets/img/testimonial/r1.jpg') }}" alt="">
                    <h2><span>4.9</span> 107 Google Reviews</h2>
                </div>

                <div id="testimonial-slider" class="owl-carousel">
                    @foreach($testimonials as $testimonial)
                    <div class="testimonial">
                        <div class="pic">
                            <img src="{{ $testimonial->getFirstMediaUrl('testimonial') }}" alt="">
                        </div>
                        <div class="testimonial-content">
                            <p class="description">
                                {!! $testimonial->message !!}
                            </p>
                            <div class="pd_ratng">
                                <div class="rtngs">
                                    @for($i=1; $i<= $testimonial->rating; $i++)
                                    <i class="fa fa-star"></i>
                                    @endfor
                                    @for($j=$testimonial->rating; $j< 5; $j++)
                                    <i class="fa fa-star" style="color: #817f79;"></i>
                                    @endfor
                                </div>
                            </div>
                            <h3 class="testimonial-title">{{ $testimonial->name }}</h3>
                            <small class="post"> - {{ $testimonial->address }}</small>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section> 
@endif
<!-- End STestimonials Area -->		




<!--  Process -->
<section class="process_area section_padding gradient_section">
    <div class="container">
        <div class="row text-center">		
            <div class="col-lg-3 col-md-6 col-sm-6">
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

            <div class="col-lg-3 col-md-6 col-sm-6">
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

            <div class="col-lg-3 col-md-6 col-sm-6">
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

            <div class="col-lg-3 col-md-6 col-sm-6">
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