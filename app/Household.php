<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Household extends Model
{
    public $fillable = [
        'client_id',
        'size',
        'annual_income',
    ];

//    public function members()
//    {
//        return $this->hasMany(Client::class);
//    }
}
