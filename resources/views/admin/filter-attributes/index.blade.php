@extends('layouts.app')

@section('title', 'Filter Attributes')

@section('content')
<div class="container-fluid">
    <div class="row mb-4">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
                <h1 class="h3 mb-0 text-gray-800">Filter Attributes</h1>
                <a href="{{ route('filter-attributes.create') }}" class="btn btn-primary shadow-sm">
                    <i class="fas fa-plus fa-sm"></i> Add New Attribute
                </a>
            </div>
        </div>
    </div>

    <div class="card shadow mb-4">
        <div class="card-header py-3 bg-white">
            <div class="row">
                <div class="col-12 col-md-6 mb-2 mb-md-0">
                    <h6 class="m-0 font-weight-bold text-primary">All Filter Attributes</h6>
                </div>
                <div class="col-12 col-md-6">
                    <form method="GET" action="{{ route('filter-attributes.index') }}" class="form-inline float-md-right">
                        <div class="input-group">
                            <input type="text" class="form-control" name="search" placeholder="Search..." 
                                   value="{{ request('search') }}" aria-label="Search">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="submit">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-hover" width="100%" cellspacing="0">
                    <thead class="thead-light">
                        <tr>
                            <th width="5%">#</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Values</th>
                            <th width="15%">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($attributes as $attribute)
                        <tr>
                            <td>{{ $loop->iteration + ($attributes->currentPage() - 1) * $attributes->perPage() }}</td>
                            <td>{{ $attribute->name }}</td>
                            <td><code>{{ $attribute->slug }}</code></td>
                           
                            <td>
                                <a href="{{ route('filter-attribute-values.index', $attribute) }}" 
                                   class="badge badge-secondary">
                                    {{ $attribute->values_count }} values
                                </a>
                            </td>
                            <td>
                                <div class="d-flex">
                                    <a href="{{ route('filter-attributes.edit', $attribute) }}" 
                                       class="btn btn-sm btn-primary mr-2" title="Edit">
                                        <i class="fas fa-edit fa-xs"></i>
                                    </a>
                                    <a href="{{ route('filter-attribute-values.index', $attribute) }}" 
                                       class="btn btn-sm btn-info mr-2" title="Manage Values">
                                        <i class="fas fa-list fa-xs"></i>
                                    </a>
                                    <form action="{{ route('filter-attributes.destroy', $attribute) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-danger" 
                                                title="Delete" onclick="return confirm('Are you sure?')">
                                            <i class="fas fa-trash fa-xs"></i>
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="6" class="text-center">No filter attributes found</td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            
            @if($attributes->hasPages())
            <div class="row mt-3">
                <div class="col-12">
                    <div class="float-right">
                        {{ $attributes->withQueryString()->links() }}
                    </div>
                </div>
            </div>
            @endif
        </div>
    </div>
</div>
@endsection

@section('style')
<style>
    .badge {
        font-size: 0.85em;
        font-weight: 500;
    }
    .table td, .table th {
        vertical-align: middle;
    }
    .action-btns {
        white-space: nowrap;
    }
</style>
@endsection

@section('script')
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Add confirmation for delete actions
        const deleteForms = document.querySelectorAll('form[action*="destroy"]');
        
        deleteForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                if (!confirm('Are you sure you want to delete this attribute? All associated values will also be removed.')) {
                    e.preventDefault();
                }
            });
        });
    });
</script>
@endsection