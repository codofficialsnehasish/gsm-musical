<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>@yield('title') | GSM Musical</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
	<link rel="icon" type="image/x-icon" href="{{ asset('assets/site-assets/img/fab.png') }}">
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700,800" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css?family=Handlee" rel="stylesheet">	
	<link rel="stylesheet" href="{{ asset('assets/site-assets/css/animate.css') }}" />
	<link rel="stylesheet" href="{{ asset('assets/site-assets/css/owl.theme.default.min.css') }}" />
	<link rel="stylesheet" href="{{ asset('assets/site-assets/css/owl.carousel.min.css') }}" />
	<link rel="stylesheet" href="{{ asset('assets/site-assets/css/meanmenu.min.css') }}" />
	<link rel="stylesheet" href="{{ asset('assets/site-assets/css/venobox.css') }}" />
	<link rel="stylesheet" href="{{ asset('assets/site-assets/css/font-awesome.css') }}" />
	<link rel="stylesheet" href="{{ asset('assets/site-assets/css/bootstrap.min.css') }}" />	
	<link rel="stylesheet" href="{{ asset('assets/site-assets/css/style2.css') }}" />
	<link rel="stylesheet" href="{{ asset('assets/site-assets/css/responsive.css') }}" />	
	<link rel="stylesheet" href="{{ asset('assets/site-assets/zoom/css/my-zoom.css') }}" />	

    <!-- Toast message -->
    <link href="{{ asset('assets/admin-assets/plugins/toast/toastr.css') }}" rel="stylesheet" type="text/css" />
    <!-- Toast message -->
    <style>
        .suggestions {
            position: absolute;
            background: #ffffff;
            width: 88%;
            /* border: 1px solid #ccc; */
            z-index: 1000;
            display: none;
            top: 59px;
            left: 37px;
        }
        .suggestions ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .suggestions li {
            padding: 10px;
            cursor: pointer;
        }
        .suggestions li:hover {
            background: #f8f8f8;
        }
    </style>
    @yield('style')
</head>
<body>
    <!--  Start Header  -->
    @include('layouts.site-include.header')
    <!--  End Header  -->
    
    @yield('content')
    
    <!--  FOOTER START  -->
    @include('layouts.site-include.footer')
    <!--  FOOTER END  -->

    <script src="{{ asset('assets/site-assets/js/vendor/jquery-1.12.4.min.js') }}"></script>
    <script src="{{ asset('assets/site-assets/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/site-assets/js/jquery.meanmenu.min.js') }}"></script>
    <script src="{{ asset('assets/site-assets/js/jquery.mixitup.js') }}"></script>
    <script src="{{ asset('assets/site-assets/js/jquery.counterup.min.js') }}"></script>
    <script src="{{ asset('assets/site-assets/js/waypoints.min.js') }}"></script>
    <script src="{{ asset('assets/site-assets/js/wow.min.js') }}"></script>
    <script src="{{ asset('assets/site-assets/js/venobox.min.js') }}"></script>
    <script src="{{ asset('assets/site-assets/js/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('assets/site-assets/js/simplePlayer.js') }}"></script>
    <script src="{{ asset('assets/site-assets/js/main.js') }}"></script>

    <script src="{{ asset('assets/site-assets/zoom/js/my-zoom.js') }}"></script>

    <!-- toast message -->
    <script src="{{ asset('assets/admin-assets/plugins/toast/toastr.js') }}"></script>
    <script src="{{ asset('assets/admin-assets/js/toastr.init.js') }}"></script>
    <!-- toast message -->
    @include('layouts._massages')
    @include('layouts.scripts.cart_script')
    @include('layouts.scripts.locations')

    <script>
        $(document).ready(function() {
            $('#search-box').on('keyup', function() {
                let query = $(this).val();
                // if (query.length > 2) {
                    $.ajax({
                        url: "{{ route('search.suggestions') }}",
                        method: "GET",
                        data: { query: query },
                        success: function(data) {
                            let suggestionHTML = '<ul>';
                            data.forEach(item => {
                                suggestionHTML += `<li class="suggestion-item" data-url="${item.url}">
                                                    <strong>${item.type ? item.type + ': ' : ''}</strong> ${item.name}
                                                </li>`;
                            });
                            suggestionHTML += '</ul>';
                            $('#suggestions-box').html(suggestionHTML).show();
                        }
                    });
                // } else {
                //     $('#suggestions-box').hide();
                // }
            });

            $(document).on('click', '.suggestion-item', function() {
                window.location.href = $(this).data('url'); // Redirect to the selected item's URL
            });

            $(document).click(function(e) {
                if (!$(e.target).closest('#search-box, #suggestions-box').length) {
                    $('#suggestions-box').hide();
                }
            });
        });
    </script>


    @yield('script')
</body>
</html>