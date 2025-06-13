@extends('layouts.web-app')

@section('title') About Us @endsection

@section('content')
<!-- Page item Area -->
<div id="page_item_area">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 text-left">
                <h3>About Us</h3>
            </div>		

            <div class="col-sm-6 text-right">
                <ul class="p_items">
                    <li><a href="{{ route('home') }}">home</a></li>
                    <li><span>About Us</span></li>
                </ul>					
            </div>	
        </div>
    </div>
</div>

<!-- About Page -->

<div class="about_page_area fix">
    <div class="container">
        <div class="row about_inner">
            <div class="about_img_area col-lg-12 col-md-12 col-xs-12">
                <div data-video="NrmMk1Myrxc" id="video">
                <img src="{{ asset('assets/site-assets/img/promo/5.jpg') }}" alt="Video Screenshot">
                </div>
            </div>
            
            <div class="about_content_area col-lg-12  col-md-12 col-xs-12">
                <h2>Who we are</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat enim ad minim veniam, quis nostrud exercita.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
            </div>
        </div>
    </div>
</div>
@endsection