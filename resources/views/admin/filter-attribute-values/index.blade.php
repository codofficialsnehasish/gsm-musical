@extends('layouts.app')

@section('title','Filter Attributes Values')

@section('content')
<div class="container-fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex justify-content-between align-items-center">
            <h6 class="m-0 font-weight-bold text-primary">
                Values for: {{ $filter_attribute->name }}
            </h6>
            <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#addValueModal">
                <i class="fas fa-plus"></i> Add Value
            </button>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($values as $value)
                        <tr>
                            <td>{{ $value->value }}</td>
                            <td>{{ $value->created_at->format('Y-m-d') }}</td>
                            <td>
                                <button class="btn btn-sm btn-primary edit-value-btn" 
                                        data-id="{{ $value->id }}" 
                                        data-value="{{ $value->value }}">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <form action="{{ route('filter-attribute-values.destroy', [$filter_attribute, $value]) }}" method="POST" class="d-inline">
                                    @csrf @method('DELETE')
                                    <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure?')">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- Add Value Modal -->
<div class="modal fade" id="addValueModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form action="{{ route('filter-attribute-values.store', $filter_attribute) }}" method="POST">
                @csrf
                <div class="modal-header">
                    <h5 class="modal-title">Add New Value</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="value">Value</label>
                        <input type="text" class="form-control" id="value" name="value" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Edit Value Modal -->
<div class="modal fade" id="editValueModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form id="editValueForm" method="POST">
                @csrf @method('PUT')
                <div class="modal-header">
                    <h5 class="modal-title">Edit Value</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="edit_value">Value</label>
                        <input type="text" class="form-control" id="edit_value" name="value" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
$(document).ready(function() {
    $('.edit-value-btn').click(function() {
        const id = $(this).data('id');
        const value = $(this).data('value');
        const url = "{{ route('filter-attribute-values.update', [$filter_attribute, 'value_id']) }}".replace('value_id', id);
        
        $('#edit_value').val(value);
        $('#editValueForm').attr('action', url);
        $('#editValueModal').modal('show');
    });
});
</script>
@endsection