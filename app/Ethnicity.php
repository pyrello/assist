<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Ethnicity
 * @package App\Models
 * @version January 11, 2017, 10:38 pm UTC
 */
class Ethnicity extends Model
{
    public $table = 'ethnicity';

    public $fillable = [
        'name'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'name' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required'
    ];

    public $timestamps = false;

    
}
