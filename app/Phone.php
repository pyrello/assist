<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    public $table = 'phone_numbers';
    public $fillable = [
        'client_id',
        'number',
        'type',
        'ext',
        'primary',
        'safe',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
