<?php

namespace App;

use Carbon\Carbon;
use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Client
 * @package App\Models
 * @version January 12, 2017, 9:28 pm UTC
 */
class Client extends Model
{
    use SoftDeletes;

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'last_four' => 'max:4',
        'address.state' => 'required',
        'address.county' => 'required',
    ];
    public $table = 'clients';
    public $fillable = [
        'intake_id',
        'parent_id',
        'advocate_id',
        'last_four',
        'first_name',
        'last_name',
        'birth_date',
        'gender',
        'homeless',
        'address_id',
    ];
    protected $dates = ['birth_date', 'deleted_at'];
    protected $appends = ['full_name', 'primary_phone_number'];
    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        //'last_four' => 'string',
        //'first_name' => 'string',
        //'last_name' => 'string',
        //'address_id' => 'integer',
        //'gender' => 'string',
    ];
    protected $hidden = ['address_id'];

    public function getAgeAttribute()
    {
        return Carbon::now()->diffInYears($this->birth_date);
    }

    public function anonymousCheck() {
        // Todo: Finalize this logic
        $check = 0;

        foreach (['first_name', 'last_name', 'birth_date'] as $field) {
            if (!empty($this->{$field})) {
                $check++;
            }
        }

        if ($check >= 2) {
            return false;
        }

        // Add additional logic here

        return true;
    }

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

    // Relationships

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function abusers() {
        return $this->belongsToMany(Abuser::class)->withPivot('relationship');
    }

    /**
     * Returns the abuse relationships
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function abuseRelationships() {
        return $this->hasMany(AbuseRelationship::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function activities()
    {
        return $this->hasMany(Activity::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function dependents()
    {
        return $this->hasMany(Dependent::class);
    }

//    /**
//     * @return bool
//     */
//    public function getHeadOfHouseholdAttribute()
//    {
//        if (!is_null($this->household)) {
//            return $this->household->head_of_household_id === $this->id;
//        }
//
//        return false;
//    }
//
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function household()
    {
        return $this->hasOne(Household::class);
    }

//    public function getHouseholdSizeAttribute()
//    {
//        if (!is_null($this->household) && !$this->household->members->isEmpty()) {
//            return $this->household->members->count();
//        }
//    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function incidents()
    {
        return $this->hasMany(Incident::class);
    }

    public function lastIncident()
    {
        return $this->hasMany(Incident::class)
            ->latest('date')
            ->limit(1);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function intake()
    {
        return $this->belongsTo(Intake::class);
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

    public function notes()
    {
        return $this->hasMany(Note::class);
    }

    public function getPrimaryPhoneNumberAttribute()
    {
        return $this->phones()->where('primary', '=', true)->first();
    }

    public function parent() {
        return $this->belongsTo(Client::class, 'parent_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function phones()
    {
        return $this->hasMany(Phone::class);
    }

    public function relationship()
    {
        return $this->belongsToMany(ClientRelationship::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function shelterStays()
    {
        return $this->belongsToMany(ShelterStay::class);
    }

    public function getInShelterAttribute()
    {

    }
}
