<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Gender
 * @package App\Models
 * @version January 17, 2017, 3:44 am UTC
 */
class Gender extends Model
{
    public $table = 'genders';

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
