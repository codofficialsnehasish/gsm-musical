@extends('layouts.web-app')

@section('title')
    Shop
@endsection

@section('content')

    <!-- Page item Area -->
    <div id="page_item_area">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 text-left">
                    <h3>Shop</h3>
                </div>
                <div class="col-sm-6 text-right">
                    <ul class="p_items">
                        <li><a href="{{ route('home') }}">home</a></li>
                        <li><a href="javascript:void(0)">category</a></li>
                        <li><span>Shop</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
     

    <!-- Shop Product Area -->
    <div class="shop_page_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-3">
                    <section class="widget mb-9">
                        <h4 class="headingVII fwEbold text-uppercase mb-6">Filter by price</h4>
                        <!-- filter ranger form -->
                        <form id="filterForm" action="{{ route('categories.products', $category->slug) }}" method="GET">
                            <div id="slider-range" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                <div class="ui-slider-range ui-widget-header ui-corner-all"></div>
                                <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                            </div>
                            <input type="hidden" id="amount1" name="price_min" value="{{ request('price_min', 0) }}">
                            <input type="hidden" id="amount2" name="price_max" value="{{ request('price_max', 10000) }}">
                            <div class="get-results-wrap d-flex justify-content-left flex-column">
                                <button type="submit" class="btn btnTheme btn-shop fwEbold md-round px-3 pt-1 pb-2 text-uppercase">Filter</button>
                                <p id="amount" class="mb-0">Price : ₹<span id="min-price">{{ request('price_min', 0) }}</span> - ₹<span id="max-price">{{ request('price_max', 10000) }}</span></p>
                            </div>
                            
                            <!-- Hidden fields to maintain other filters -->
                            @if(request('sort_by'))
                                <input type="hidden" name="sort_by" value="{{ request('sort_by') }}">
                            @endif
                            @if(request('show'))
                                <input type="hidden" name="show" value="{{ request('show') }}">
                            @endif
                        </form>
                    </section>
                    <div id="accordion">
                        <!-- Accordion Item: Product Type -->
                        <div class="card">
                            <div class="card-header p-0" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Product Type <span class="arrow">▼</span>
                                    </button>
                                </h5>
                            </div>
                    
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne">
                                <form id="productTypeForm" class="filter-sub-form">
                                    @php
                                        $selectedTypes = request('product_types', []);
                                        $types = ['Electronic Drum Kits', 'Midi Keyboards', 'Monitor Speakers', 'Digital Pianos'];
                                    @endphp
                                    
                                    @foreach($types as $type)
                                        <div class="shop_accordian_design">
                                            <input type="checkbox" id="{{ Str::slug($type) }}" name="product_types[]" 
                                                value="{{ $type }}" {{ in_array($type, $selectedTypes) ? 'checked' : '' }}>
                                            <label for="{{ Str::slug($type) }}">{{ $type }}</label>
                                        </div>
                                    @endforeach
                                </form>
                            </div>
                        </div>
                    
                        <!-- Accordion Item: Condition -->
                        <div class="card">
                            <div class="card-header p-0" id="headingTwo">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Condition <span class="arrow">▶</span>
                                    </button>
                                </h5>
                            </div>
                    
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo">
                                <form id="conditionForm" class="filter-sub-form">
                                    @php
                                        $selectedConditions = request('conditions', []);
                                        $conditions = ['New', 'Used', 'Refurbished'];
                                    @endphp
                                    
                                    @foreach($conditions as $condition)
                                        <div class="shop_accordian_design">
                                            <input type="checkbox" id="{{ Str::slug($condition) }}" name="conditions[]" 
                                                value="{{ $condition }}" {{ in_array($condition, $selectedConditions) ? 'checked' : '' }}>
                                            <label for="{{ Str::slug($condition) }}">{{ $condition }}</label>
                                        </div>
                                    @endforeach
                                </form>
                            </div>
                        </div>
                    
                        <!-- Accordion Item: Shipping Time -->
                        <div class="card">
                            <div class="card-header p-0" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Shipping Time <span class="arrow">▶</span>
                                    </button>
                                </h5>
                            </div>
                    
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree">
                                <form id="shippingForm" class="filter-sub-form">
                                    @php
                                        $selectedShipping = request('shipping_times', []);
                                        $shippingOptions = ['1 Day Shipping', '3 Days Shipping', '1 Week Shipping'];
                                    @endphp
                                    
                                    @foreach($shippingOptions as $option)
                                        <div class="shop_accordian_design">
                                            <input type="checkbox" id="{{ Str::slug($option) }}" name="shipping_times[]" 
                                                value="{{ $option }}" {{ in_array($option, $selectedShipping) ? 'checked' : '' }}>
                                            <label for="{{ Str::slug($option) }}">{{ $option }}</label>
                                        </div>
                                    @endforeach
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-10 col-md-9">
                    <div class="shop_bar_tp fix">
                        <form method="GET" id="filterForm">
                            <div class="row">
                                <div class="col-sm-6 col-xs-12 col-7 short_by_area">
                                    <div class="short_by_inner">
                                        <label>Sort by:</label>
                                        <select class="sort-select" name="sort_by"
                                            onchange="document.getElementById('filterForm').submit()">
                                            <option value="" selected disabled>Choose...</option>
                                            <option value="name_desc"
                                                {{ request('sort_by') == 'name_desc' ? 'selected' : '' }}>Name Descending
                                            </option>
                                            <option value="date_desc"
                                                {{ request('sort_by') == 'date_desc' ? 'selected' : '' }}>Date Descending
                                            </option>
                                            <option value="price_asc"
                                                {{ request('sort_by') == 'price_asc' ? 'selected' : '' }}>Price Assending
                                            </option>
                                            <option value="price_desc"
                                                {{ request('sort_by') == 'price_desc' ? 'selected' : '' }}>Price Descending
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-xs-12 col-5 show_area">
                                    <div class="show_inner">
                                        <label>Show:</label>
                                        <select class="show-select" name="show"
                                            onchange="document.getElementById('filterForm').submit()">
                                            <option value="4" {{ request('show') == '4' ? 'selected' : '' }}>4</option>
                                            <option value="8" {{ request('show') == '8' ? 'selected' : '' }}>8</option>
                                            <option value="12" {{ request('show') == '12' ? 'selected' : '' }}>12
                                            </option>
                                            <option value="30" {{ request('show') == '30' ? 'selected' : '' }}>30
                                            </option>
                                            <option value="{{ $products->total() }}"
                                                {{ request('show') == $products->total() ? 'selected' : '' }}>ALL</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div class="shop_details text-center">
                        <div class="row">
                            @foreach ($products as $product)
                                <div class="col-md-4 col-sm-6 col-6 col-lg-3">
                                    <div class="single_product">
                                        <div class="product_image">
                                            <a href="{{ route('product.details',$product->slug) }}">
                                                <img src="{{ getProductMainImage($product->id) }}" alt="" />
                                                <div class="new_badge">New</div>
                                              
                                            </a>
                                            <a href="javascript:void(0)" class="add-to-wishlist new_badge1"
                                            data-product-id="{{ $product->id }}"><i class="fa fa-heart-o"></i></a>
                                            {{-- <div class="box-content"> --}}
                                               
                                                {{-- <a href="javascript:void(0)" class="add-to-cart-btn" data-product-id="{{ $product->id }}"><i class="fa fa-cart-plus"></i></a> --}}
                                                {{-- <a href="{{ route('product.details', $product->slug) }}"><i
                                                        class="fa fa-search"></i></a> --}}
                                            {{-- </div> --}}
                                        </div>

                                        <div class="product_btm_text">
                                            <h4><a
                                                    href="{{ route('product.details', $product->slug) }}">{{ $product->name }}</a>
                                            </h4>
                                            <div class="p_rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <p class="price">Rs {{ $product->total_price }}</p>
                                            <button><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>

                    <div class="col-xs-12">
                        <div class="blog_pagination pgntn_mrgntp fix">
                            <div class="pagination text-center">
                                @if ($products->hasPages())
                                    <ul>
                                        {{-- Previous Page Link --}}
                                        @if ($products->onFirstPage())
                                            <li class="disabled"><a href="#"><i class="fa fa-angle-left"></i></a>
                                            </li>
                                        @else
                                            <li><a href="{{ $products->previousPageUrl() }}"><i
                                                        class="fa fa-angle-left"></i></a></li>
                                        @endif

                                        {{-- Pagination Elements --}}
                                        @foreach ($products->links()->elements as $element)
                                            @if (is_array($element))
                                                @foreach ($element as $page => $url)
                                                    <li>
                                                        <a href="{{ $url }}"
                                                            class="{{ $page == $products->currentPage() ? 'active' : '' }}">
                                                            {{ $page }}
                                                        </a>
                                                    </li>
                                                @endforeach
                                            @endif
                                        @endforeach

                                        {{-- Next Page Link --}}
                                        @if ($products->hasMorePages())
                                            <li><a href="{{ $products->nextPageUrl() }}"><i
                                                        class="fa fa-angle-right"></i></a></li>
                                        @else
                                            <li class="disabled"><a href="#"><i class="fa fa-angle-right"></i></a>
                                            </li>
                                        @endif
                                    </ul>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

@endsection
