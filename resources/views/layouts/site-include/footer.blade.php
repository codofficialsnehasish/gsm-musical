<footer class="footer_area">
    <div class="container">
        <div class="row">	 
            <div class="col-md-5 col-sm-6">
                <div class="single_ftr">
                    <img src="{{ asset('assets/site-assets/img/logo-food.png') }}" alt="">
                    <div class="newsletter_form">
                        <p>Immerse yourself in the musical oasis of Gsm Musical, the 
                            unrivalled choice for KoIkata's music lovers.</p>
                        <div class="ftr_social_icon">
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-google"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> <!--  End Col -->
            
            <div class="col-md-2 col-sm-6">
                <div class="single_ftr">
                    <h4 class="sf_title">QUICK LINKS</h4>
                    <ul>
                        <li><a href="{{ route('brands.all') }}">Shop by brand </a></li>
                        <li><a href="#">Musical instrument </a></li>
                        <li><a href="#">Proffesional audio </a></li>
                        <li><a href="{{ route('contact') }}">Support</a></li>
                        <li><a href="{{ route('about') }}">About</a></li>
                    </ul>
                </div>
            </div> <!--  End Col -->
            
            <div class="col-md-2 col-sm-6">
                <div class="single_ftr">
                    <h4 class="sf_title">CUSTOMER CARE</h4>
                    <ul>
                        <li><a href="{{ route('product.all') }}">Shop</a></li>
                        <li><a href="{{ route('cart') }}">Cart</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="{{ route('wishlist.index') }}">Wishlist</a></li>
                        <li><a href="#">Order Tracking</a></li>
                    </ul>
                </div>
            </div> <!--  End Col -->	

            <div class="col-md-3 col-sm-6">
                <div class="single_ftr">
                    <h4 class="sf_title">CALL</h4>
                    <ul>
                        <li>+91 70036 96900</li>
                    </ul>

                    <h4 class="sf_title">EMAIL</h4>
                    <ul>
                        <li>gsmmusicalkolkata@hotmail.com</li>
                    </ul>

                    <h4 class="sf_title">ADDRESS</h4>
                    <ul>
                        <li>Kavi Nazrul Sarani, Opposite Asma Dhaba, 
                            Baruipur, Kolkata, India, 700144</li>
                    </ul>
                </div>
            </div> <!--  End Col -->
        </div>
    </div>


    <div class="ftr_btm_area">
        <div class="container">
            <div class="row">
                
                <div class="col-sm-6">
                    <p class="copyright_text text-left">&copy; 2024 GSM MUSICAL.COM. All rights reserved.</p>
                </div>
                
                <div class="col-sm-6">
                    <div class="payment_mthd_icon text-right">
                        <ul>
                            <li><img src="{{ asset('assets/site-assets/img/icon/mobile-receipt-visa.jpg') }}" srcset="" alt="visa" ></li>
                            <li><img src="{{ asset('assets/site-assets/img/icon/mobile-receipt-mastercard.jpg') }}" srcset="" alt="mastercard"></li>
                            <li><img src="{{ asset('assets/site-assets/img/icon/American_Express_logo__2018.svg') }}" srcset="" alt="express"></i></li>
                            <li><img src="{{ asset('assets/site-assets/img/icon/paypallogo.jpg') }}" srcset="" alt="Paypal"></i></li>
                            {{-- <li><i class="fa fa-cc-discover"></i></li> --}}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>