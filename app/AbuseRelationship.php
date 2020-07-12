<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AbuseRelationship extends Model
{
    use SoftDeletes;

    protected $table = 'abuser_client';

    protected $casts = [
        'abuse_types' => 'array',
    ];

    protected $dates = ['birth_date'];

    public $fillable = [
        'client_id',
        'advocate_id',
        'abuser_id',
        'relationship',
        'abuse_types',
    ];

    public function abuser() {
        return $this->belongsTo(Abuser::class);
    }

    public function client() {
        return $this->belongsTo(Client::class);
    }
}
