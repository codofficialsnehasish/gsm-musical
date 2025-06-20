@extends('layouts.app')

@section('title', 'Create Filter Attribute')

@section('content')
<div class="container-fluid">
    <div class="row mb-4">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
                <h1 class="h3 mb-0 text-gray-800">Create Filter Attribute</h1>
                <a href="{{ route('filter-attributes.index') }}" class="btn btn-secondary shadow-sm">
                    <i class="fas fa-arrow-left fa-sm"></i> Back
                </a>
            </div>
        </div>
    </div>

    <div class="card shadow mb-4">
        <div class="card-header py-3 bg-white">
            <h6 class="m-0 font-weight-bold text-primary">Attribute Details</h6>
        </div>
        <div class="card-body">
            <form action="{{ route('filter-attributes.store') }}" method="POST">
                @csrf
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">Attribute Name *</label>
                            <input type="text" class="form-control @error('name') is-invalid @enderror" 
                                   id="name" name="name" value="{{ old('name') }}" required>
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="slug">Slug *</label>
                            <input type="text" class="form-control @error('slug') is-invalid @enderror" 
                                   id="slug" name="slug" value="{{ old('slug') }}" required>
                            @error('slug')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                            <small class="form-text text-muted">Unique identifier (lowercase, hyphens instead of spaces)</small>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input_type">Input Type *</label>
                            <select class="form-control @error('input_type') is-invalid @enderror" 
                                    id="input_type" name="input_type" required>
                                <option value="">Select Input Type</option>
                                <option value="checkbox" {{ old('input_type') == 'checkbox' ? 'selected' : '' }}>Checkbox</option>
                                <option value="radio" {{ old('input_type') == 'radio' ? 'selected' : '' }}>Radio Button</option>
                                <option value="range" {{ old('input_type') == 'range' ? 'selected' : '' }}>Range Slider</option>
                            </select>
                            @error('input_type')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                </div>
                
                <div class="row mt-4">
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save fa-sm"></i> Save Attribute
                        </button>
                        <a href="{{ route('filter-attributes.index') }}" class="btn btn-secondary">
                            Cancel
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('script')
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Auto-generate slug from name
    const nameField = document.getElementById('name');
    const slugField = document.getElementById('slug');
    
    if (nameField && slugField) {
        nameField.addEventListener('blur', function() {
            if (!slugField.value) {
                slugField.value = this.value.toLowerCase()
                    .replace(/\s+/g, '-')    // Replace spaces with -
                    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
                    .replace(/^-+/, '')       // Trim - from start of text
                    .replace(/-+$/, '');      // Trim - from end of text
            }
        });
    }
});
</script>
@endsection