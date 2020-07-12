<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Abuser extends Model
{
    use SoftDeletes;

    public $fillable = [
        'first_name',
        'last_name',
        'birth_date',
        'gender',
        'hair_color',
        'hair_length',
        'eye_color',
        'height',
        'weight',
        'identifying_features',
        'vehicle',
    ];
    protected $dates = ['birth_date'];
    protected $appends = ['client_ids', 'full_name'];

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

    public function relationships() {
        return $this->hasMany(AbuseRelationship::class);
    }

    public function clients() {
        return $this->belongsToMany(Client::class)->withPivot('relationship');
    }

    public function getClientIdsAttribute() {
        return $this->clients->pluck('id')->all();
    }

    /**
     * Ethnicity relation.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     **/
    public function ethnicity()
    {
        return $this->belongsToMany(Ethnicity::class)->withPivot('order');
    }

    public function incidents() {
        return $this->belongsToMany(Client::class);
    }
}
