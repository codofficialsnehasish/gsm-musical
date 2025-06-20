@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex justify-content-between align-items-center">
            <h6 class="m-0 font-weight-bold text-primary">
                Filter Attributes for: {{ $category->name }}
            </h6>
        </div>
        <div class="card-body">
            <form action="{{ route('categories.filter-attributes.update', $category) }}" method="POST">
                @csrf @method('PUT')
                
                <div class="row">
                    <div class="col-md-5">
                        <h5>Available Attributes</h5>
                        <div class="list-group">
                            @foreach($attributes as $attribute)
                                @unless($assignedAttributes->contains('id', $attribute->id))
                                <div class="list-group-item">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>{{ $attribute->name }}</span>
                                        <button type="button" class="btn btn-sm btn-success add-attribute-btn" 
                                                data-id="{{ $attribute->id }}">
                                            <i class="fas fa-plus"></i> Add
                                        </button>
                                    </div>
                                </div>
                                @endunless
                            @endforeach
                        </div>
                    </div>
                    
                    <div class="col-md-7">
                        <h5>Assigned Attributes</h5>
                        <div id="assignedAttributesList" class="sortable-list">
                            @foreach($assignedAttributes as $attribute)
                            <div class="card mb-2" data-id="{{ $attribute->id }}">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <span>{{ $attribute->name }}</span>
                                    <button type="button" class="btn btn-sm btn-danger remove-attribute-btn">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                                <div class="card-body">
                                    <input type="hidden" name="attributes[{{ $loop->index }}][id]" value="{{ $attribute->id }}">
                                    <div class="form-group">
                                        <label>Sort Order</label>
                                        <input type="number" name="attributes[{{ $loop->index }}][sort_order]" 
                                               value="{{ $attribute->pivot->sort_order }}" class="form-control">
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
                
                <div class="mt-4">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                    <a href="{{ route('admin.categories.index') }}" class="btn btn-secondary">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.14.0/Sortable.min.js"></script>
<script>
$(document).ready(function() {
    // Initialize sortable
    new Sortable(document.getElementById('assignedAttributesList'), {
        animation: 150,
        handle: '.card-header',
        onEnd: function() {
            // Update sort order inputs after reordering
            $('#assignedAttributesList .card').each(function(index) {
                $(this).find('input[name*="sort_order"]').val(index + 1);
            });
        }
    });
    
    // Add attribute
    $('.add-attribute-btn').click(function() {
        const attributeId = $(this).data('id');
        const attributeName = $(this).siblings('span').text();
        const newIndex = $('#assignedAttributesList .card').length;
        
        const newCard = `
        <div class="card mb-2" data-id="${attributeId}">
            <div class="card-header d-flex justify-content-between align-items-center">
                <span>${attributeName}</span>
                <button type="button" class="btn btn-sm btn-danger remove-attribute-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="card-body">
                <input type="hidden" name="attributes[${newIndex}][id]" value="${attributeId}">
                <div class="form-group">
                    <label>Sort Order</label>
                    <input type="number" name="attributes[${newIndex}][sort_order]" 
                           value="${newIndex + 1}" class="form-control">
                </div>
            </div>
        </div>
        `;
        
        $('#assignedAttributesList').append(newCard);
        $(this).closest('.list-group-item').remove();
    });
    
    // Remove attribute
    $(document).on('click', '.remove-attribute-btn', function() {
        const card = $(this).closest('.card');
        const attributeId = card.data('id');
        const attributeName = card.find('.card-header span').text();
        
        // Move back to available list
        $('.list-group').append(`
            <div class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <span>${attributeName}</span>
                    <button type="button" class="btn btn-sm btn-success add-attribute-btn" 
                            data-id="${attributeId}">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        `);
        
        card.remove();
        
        // Reindex the remaining cards
        $('#assignedAttributesList .card').each(function(index) {
            $(this).find('input[name*="sort_order"]').val(index + 1);
            $(this).find('input[name*="id"]').attr('name', `attributes[${index}][id]`);
            $(this).find('input[name*="sort_order"]').attr('name', `attributes[${index}][sort_order]`);
        });
    });
});
</script>
@endsection