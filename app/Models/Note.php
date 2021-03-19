<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    protected $fillable = [
        'note',
    ];

    public function folder()
    {
        return $this->belongsTo(Folder::class, 'folder_id');
    }
}
