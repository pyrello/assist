<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Note extends Model
{
    use SoftDeletes;

    protected $appends = [
        'path_fragment',
        'type',
    ];

    public $fillable = [
        'advocate_id',
        'client_id',
        'content',
        'noteable_type',
        'noteable_id',
    ];

    public function advocate()
    {
        return $this->belongsTo(Advocate::class);
    }

    public function noteable()
    {
        return $this->morphTo();
    }

    public function getTypeAttribute()
    {
        return substr($this->noteable_type, strpos($this->noteable_type, '\\')+1);
    }

    public function getPathFragmentAttribute()
    {
        return strtolower(Str::plural($this->getTypeAttribute()));
    }
}
