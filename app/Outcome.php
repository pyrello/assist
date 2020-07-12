<?php

namespace App;

use App\Traits\Noteable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Outcome extends Model
{
    use Noteable, SoftDeletes;

    public $fillable = [
        'active',
        'description',
    ];

    public function activities()
    {
        return $this->belongsToMany(Activity::class);
    }
}
