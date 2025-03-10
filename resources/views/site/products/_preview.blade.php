<div class="">
    <ul id="glasscase" class="gc-start">
        @php $product_images = $product->getMedia('products-media') @endphp
        @foreach($product_images as $image)
        <li><img src="{{ $image->getUrl() }}" alt="{{ $product->name }}"  data-gc-caption="Your caption text" /></li>
        @endforeach
    </ul>
</div>