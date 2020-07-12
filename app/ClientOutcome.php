<?php

namespace App;

use App\Traits\Noteable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClientOutcome extends Model
{
    use Noteable, SoftDeletes;

    public $fillable = [
        'advocate_id',
        'client_id',
        'incident_id',
        'custom_description',
        'date',
        'outcome_id',
        'completed',
    ];
    protected $appends = ['description', 'noteable_type'];
    protected $table = 'client_outcome';

    public function client() {
        return $this->belongsTo(Client::class);
    }

    public function outcome()
    {
        return $this->belongsTo(Outcome::class);
    }

    public function getDescriptionAttribute()
    {
        if (!is_null($this->custom_description)) {
            return $this->custom_description;
        } elseif (!is_null($this->outcome)) {
            return $this->outcome->description;
        }

        return '';
    }
}
