<style>
    .hdr_tp_right>li {
        line-height: 11px !important;
    }

    .mc-pro-image {
        margin-right: 5px;
    }

    .offcanvas {
        width: 250px;
        background-color: #fff;
        position: fixed;
        right: -250px;
        top: 0;
        height: 100%;
        z-index: 10455;
        transition: right 0.3s ease;
    }

    .cart_menu_area {
        margin-right: 0px;
    }

    .navbar-toggler {
        line-height: 0px;
    }

    .offcanvas.show {
        right: 0;
    }

    .hdr_tp_right>li {
        line-height: 0px;
    }

    .offcanvas-header {
        padding: 15px;
        background-color: #fd002f;
        border-bottom: 1px solid #fd002f;
    }

    h5.offcanvas-title {
        color: #fff;
    }

    .offcanvas-header button.close {
        color: #000;
    }

    .offcanvas-body {
        padding: 15px;
    }

    .offcanvas ul {
        list-style: none;
        padding-left: 0;
    }

    .offcanvas-body ul.list-unstyled>li {
        position: relative;
    }

    .offcanvas-body ul.list-unstyled ul {
        display: none;
        background-color: white;
        border: 1px solid #ddd;
        margin-top: 5px;
        width: 100%;
    }

    .offcanvas-body ul.list-unstyled>li>a {
        padding: 5px 10px;
        display: block;
    }

    .offcanvas-body ul.list-unstyled ul>li>a {
        padding: 5px 10px;
        display: block;
    }

    .offcanvas-body .dropdown-toggle::after {
        float: right;
    }

    .offcanvas-body ul.list-unstyled {
        max-height: 400px;
        /* You can adjust the height as needed */
        overflow-y: auto;
    }

    .offcanvas-header {
        display: flex;
        justify-content: space-between;
    }

    .header_top_area .navbar-toggler i {
        color: #fff;
    }

    p.text-light.your_cart {
        font-family: "fredoka";
        font-weight: 500;
        font-size: 18px;
    }

    @media (max-width: 1024px) {
        p.text-light.your_cart {
            font-size: 12px;
        }

        .lan_area span {
            font-size: 12px;
        }
    }

    @media (max-width: 425px) {
        p.text-light.your_cart {
            display: inline !important;
            font-size: 15px;
        }

        .header_btm_area {
            /* display: none; */
            /* margin-bottom: 20px; */
        }

        .header_top_area {
            height: 90px;
        }

        .header_top_area .right_menu {
            top: 5px;
        }

        p.text-light.your_cart {
            display: inline !important;
            font-size: 12px;
        }

        .search_warp form.form-inline input {
            padding: 6px;
            /* border-radius: 20px; */
        }

        .search_fluid {
            padding: 0px;
        }
    }

    @media (max-width: 407px) {
        .lan_area span {
            display: none !important;
        }

        p.text-light.your_cart {
            display: none !important;
            font-size: 12px;
        }

        .header_top_area ul.nav.justify-content-end.hdr_tp_right.text-right {
            justify-content: right !important;
        }
    }
</style>
<header id="header_area">
    <div class="header_top_area">
        <div class="container">
            <div class="row">
                <div class="col-xs-3 col-sm-3 col-md-3 col-3">
                    <a class="logo" href="{{ route('home') }}">
                        <img alt="" src="{{ asset('assets/site-assets/img/logo.png') }}">
                    </a>
                </div>

                <div class="col-xs-7 col-sm-7 col-md-5 col-7 d-none d-md-flex d-lg-flex">
                    <div class="search_warp">
                        <form method="GET" action="{{ route('search') }}" class="form-inline">
                            <input type="text" name="query" id="search-box"
                                placeholder="Search products, brands, categories..." class="form-control">
                            <button type="submit" class="btn btn-default">
                                <i class="fa fa-search"></i>
                            </button>
                            <div id="suggestions-box" class="suggestions"></div>
                        </form>
                    </div>
                </div>

                <!-- Mobile Offcanvas Button -->
                <div class="col-2 d-md-none">
                    <button class="navbar-toggler" type="button" data-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars"></i>
                    </button>
                </div>


                <div class="col-xs-12 col-sm-12 col-12 col-md-3 d-none d-md-flex d-lg-flex">
                    <div class="right_menu">
                        <ul class="nav justify-content-end hdr_tp_right text-right">
                            <li class="lan_area">
                                <a href="javascript:void(0);">
                                    <i class="fa fa-lock"></i>
                                    <span>My Account</span>
                                </a>
                                <ul class="csub-menu">
                                    @auth
                                        <li><a href="{{ route('user-dashboard.profile') }}">Profile</a></li>
                                        <form method="POST" action="{{ route('logout') }}" style="display: inline;">
                                            @csrf
                                            <li>
                                                <a href="{{ route('logout') }}"
                                                    onclick="event.preventDefault(); this.closest('form').submit();">
                                                    Logout
                                                </a>
                                            </li>
                                        </form>
                                    @else
                                        <li><a class="text-dark" href="{{ route('login') }}">Login</a></li>
                                        <li><a class="text-dark" href="{{ route('register') }}">Register</a></li>
                                    @endauth
                                </ul>
                            </li>
                            <li>
                                <div class="cart_menu_area hres">
                                    <div class="cart_icon">
                                        <div class="d-flex">
                                            <a href="{{ route('cart') }}">
                                                <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                                            </a>
                                            <div class="d-flex cart_text"
                                                style="flex-direction: column; margin-left:15px;justify-content: center;">
                                                <p class="text-light your_cart">Your Cart</p>
                                                <p id="cart-count" class="text-light cart_design" style="display: none">0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mini-cart-wrapper">
                                        <div class="mc-pro-list fix">
                                            @foreach (get_cart_items() as $cart_helper_item)
                                                <div class="mc-sin-pro fix">
                                                    <a href="{{ route('product.details', $cart_helper_item->product?->slug) }}"
                                                        class="mc-pro-image float-left">
                                                        <img src="{{ getProductMainImage($cart_helper_item->product?->id) }}"
                                                            width="49" height="64" alt="" />
                                                    </a>
                                                    <div class="mc-pro-details fix">
                                                        <a
                                                            href="{{ route('product.details', $cart_helper_item->product?->slug) }}">
                                                            {{ $cart_helper_item->product?->name }}
                                                        </a>
                                                        <span>{{ $cart_helper_item->quantity }}xRs
                                                            {{ $cart_helper_item->product?->total_price }}</span>
                                                        <a class="pro-del" href="#"><i
                                                                class="fa fa-trash"></i></a>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                        <div class="mc-subtotal fix">
                                            <h4>Subtotal <span id="cart-total">Rs 0.00</span></h4>
                                        </div>
                                        <div class="mc-button">
                                            <a href="#" class="checkout_btn">checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {{-- <div class="col-md-1 d-none d-md-flex">
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="offcanvas"
                        data-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="fa fa-bars"></i>
                    </button>
                </div> --}}

                <!-- Tablet Offcanvas Button -->
                <div class="col-md-1 d-none d-md-flex d-sm-flex d-lg-none">
                    <button class="navbar-toggler" type="button" data-toggle="offcanvas1"
                        data-target="#offcanvasNavbar1" aria-controls="offcanvasNavbar" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="fa fa-bars"></i>
                    </button>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-5 col-12 d-lg-none d-md-none d-sm-flex mt-2 search_fluid">
                    <div class="search_warp">
                        <form method="GET" action="{{ route('search') }}" class="form-inline">
                            <input type="text" name="query" id="search-box"
                                placeholder="Search products, brands, categories..." class="form-control">
                            <button type="submit" class="btn btn-default">
                                <i class="fa fa-search"></i>
                            </button>
                            <div id="suggestions-box" class="suggestions"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="header_btm_area">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left">
                    <div class="menu_wrap">
                        <div class="main-menu">
                            <nav>
                                <ul>
                                    {{-- <li><a href="{{ route('home') }}">Home</a></li> --}}
                                    @if (get_menu_categories()->isNotEmpty())
                                        <li>
                                            <a href="{{ route('categories.all') }}">Shop By Category<i
                                                    class="fa fa-angle-down"></i></a>
                                            <!-- Mega Menu -->
                                            <div class="mega-menu mm-4-column mm-left">
                                                @foreach (get_menu_categories() as $category)
                                                    <div class="mm-column mm-column-link float-left">
                                                        <a href="{{ route('categories.products', $category->slug) }}">
                                                            <h3>{{ $category->name }}</h3>
                                                        </a>
                                                        @foreach ($category->children as $child_cata)
                                                            <a
                                                                href="{{ route('categories.products', $child_cata->slug) }}">{{ $child_cata->name }}</a>
                                                        @endforeach
                                                    </div>
                                                @endforeach
                                            </div>
                                        </li>
                                    @endif

                                    @if (get_visible_brands()->isNotEmpty())
                                        <li>
                                            <a href="{{ route('brands.all') }}">Shop By Brand<i
                                                    class="fa fa-angle-down"></i></a>
                                            <!-- Sub Menu -->
                                            <ul class="sub-menu">
                                                @foreach (get_visible_brands() as $header_brand_item)
                                                    <li><a
                                                            href="{{ route('brands.products', $header_brand_item->slug) }}">{{ $header_brand_item->name }}</a>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        </li>
                                    @endif

                                    @if (get_special_categories()->isNotEmpty())
                                        @foreach (get_special_categories() as $header_special_categorie)
                                            <li>
                                                <a
                                                    href="{{ route('categories.products', $header_special_categorie->slug) }}">
                                                    {{ $header_special_categorie->name }}
                                                    @if ($header_special_categorie->children->isNotEmpty())
                                                        <i class="fa fa-angle-down"></i>
                                                    @endif
                                                </a>
                                                <!-- Sub Menu -->
                                                @if ($header_special_categorie->children->isNotEmpty())
                                                    <ul class="sub-menu">
                                                        @foreach ($header_special_categorie->children as $child_cata)
                                                            <li><a
                                                                    href="{{ route('categories.products', $child_cata->slug) }}">{{ $child_cata->name }}</a>
                                                            </li>
                                                        @endforeach
                                                    </ul>
                                                @endif
                                            </li>
                                        @endforeach
                                    @endif

                                    <li><a href="{{ route('home') }}">Sound Proofing </a></li>
                                    <li><a href="{{ route('home') }}">Jampad Booking</a></li>
                                    <li><a href="{{ route('home') }}">Recording Studio</a></li>
                                    <li><a href="{{ route('home') }}">Music School</a></li>
                                    <li><a href="{{ route('home') }}">Service</a></li>
                                    {{-- <li><a href="{{ route('product.all') }}">Shop</a></li> --}}
                                    <li><a href="{{ route('about') }}">About Us</a></li>
                                    <li><a href="{{ route('contact') }}">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div> <!--  End Main Menu -->


                    </div>
                </div><!--  End Col -->

                <!-- Offcanvas Sidebar -->
                <div class="offcanvas offcanvas-right" id="offcanvasNavbar">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title">Menu</h5>
                        <button type="button" class="close" data-dismiss="offcanvas" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="list-unstyled">
                            <li><a href="{{ route('home') }}">Home</a></li>

                            @if (get_menu_categories()->isNotEmpty())
                                <li>
                                    <a href="{{ route('categories.all') }}" class="dropdown-toggle"
                                        data-toggle="dropdown">Shop By Category</a>
                                    <ul class="list-unstyled">
                                        @foreach (get_menu_categories() as $category)
                                            <li>
                                                <a
                                                    href="{{ route('categories.products', $category->slug) }}">{{ $category->name }}</a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </li>
                            @endif

                            @if (get_visible_brands()->isNotEmpty())
                                <li>
                                    <a href="{{ route('brands.all') }}" class="dropdown-toggle"
                                        data-toggle="dropdown">Shop By Brand</a>
                                    <ul class="list-unstyled">
                                        @foreach (get_visible_brands() as $header_brand_item)
                                            <li>
                                                <a
                                                    href="{{ route('brands.products', $header_brand_item->slug) }}">{{ $header_brand_item->name }}</a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </li>
                            @endif

                            <li><a href="{{ route('about') }}">About Us</a></li>
                            <li><a href="{{ route('contact') }}">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <!-- Offcanvas Sidebar -->
                <div class="offcanvas offcanvas-right" id="offcanvasNavbar1">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title">Menu</h5>
                        <button type="button" class="close" data-dismiss="offcanvas" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="list-unstyled">
                            <li><a href="{{ route('home') }}">Home</a></li>

                            @if (get_menu_categories()->isNotEmpty())
                                <li>
                                    <a href="{{ route('categories.all') }}" class="dropdown-toggle"
                                        data-toggle="dropdown">Shop By Category</a>
                                    <ul class="list-unstyled">
                                        @foreach (get_menu_categories() as $category)
                                            <li>
                                                <a
                                                    href="{{ route('categories.products', $category->slug) }}">{{ $category->name }}</a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </li>
                            @endif

                            @if (get_visible_brands()->isNotEmpty())
                                <li>
                                    <a href="{{ route('brands.all') }}" class="dropdown-toggle"
                                        data-toggle="dropdown">Shop By Brand</a>
                                    <ul class="list-unstyled">
                                        @foreach (get_visible_brands() as $header_brand_item)
                                            <li>
                                                <a
                                                    href="{{ route('brands.products', $header_brand_item->slug) }}">{{ $header_brand_item->name }}</a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </li>
                            @endif

                            <li><a href="{{ route('about') }}">About Us</a></li>
                            <li><a href="{{ route('contact') }}">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <!--  End mobile-menu -->
                {{-- <div class="col-xs-12 col-sm-12 col-md-3 text-left">
                    <div class="right_menu">
                        <ul class="hdr_tp_right text-right">
                            <li class="lan_area"><a href="javascript:void(0);"><i class="fa fa-lock"></i>  My Account <i class="fa fa-caret-down"></i></a>
                                <ul class="csub-menu">
                                    @auth
                                    <li><a href="{{ route('user-dashboard.profile') }}">Profile</a></li>
                                    <form method="POST" action="{{ route('logout') }}" style="display: inline;">
                                        @csrf
                                        <li>
                                            <a href="{{ route('logout') }}" 
                                            onclick="event.preventDefault(); this.closest('form').submit();">
                                                Logout
                                            </a>
                                        </li>
                                    </form>
                                    
                                    @else
                                    <li><a href="{{ route('login') }}">Login</a></li>
                                    <li><a href="{{ route('register') }}">Register</a></li>
                                    @endif
                                </ul>
                            </li>
                            <li class="account_area"><a href="{{ route('wishlist.index') }}"><i class="fa fa-heart-o"></i> Wishlist</a></li>
                        </ul>
                    </div>
                </div> --}}
            </div>
        </div>
    </div>
</header>
