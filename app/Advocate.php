<?php

namespace App;

use App\Traits\DescribesColumns;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

/**
 * Class Advocate
 * @package App
 * @property string first_name
 */
class Advocate extends Authenticatable
{
    use HasApiTokens, Notifiable, SoftDeletes;

    protected $appends = ['is_admin', 'is_dev', 'full_name'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getFullNameAttribute()
    {
        $name = '';
        if ($this->first_name) {
            $name = $this->first_name;
        }
        if ($this->last_name) {
            if ($name !== '') {
                $name .= ' ';
            }
            $name .= $this->last_name;
        }
        return $name;
    }

    public function getIsAdminAttribute()
    {
        return $this->is_dev || $this->role === 'admin';
    }

    public function getIsDevAttribute()
    {
        return ($this->id === 33);
    }
}
