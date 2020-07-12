<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class City
 * @package App\Models
 * @version January 11, 2017, 9:07 pm UTC
 */
class City extends Model
{
    public $table = 'cities';

    public $fillable = [
        'state_id',
        'name'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'state_id' => 'integer',
        'name' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'state_id' => 'required',
        'name' => 'required'
    ];

    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function state()
    {
        return $this->belongsTo(\App\State::class);
    }
}
