<?php

namespace App\Reports\Traits;

use App\Reports\Join;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

/**
 * Trait Joinable
 * @package App\Reports\Traits
 * @property Join $joins
 */
trait Joinable
{
    /**
     * @return mixed
     */
    public function joins()
    {
        return $this->morphToMany(Join::class, 'joinable', 'reporting_joinables');
    }

    /**
     * Load joins if not loaded, then loop through them and
     * add them to the provided query.
     *
     * @param Builder|string $query
     * @return Joinable
     */
    public function addJoinsToQuery($query)
    {
        if (!$this->relationLoaded('joins')) {
            $this->load('joins');
        }

        /** @var Join $join */
        foreach ($this->joins as $join) {
            $join->addJoinToQuery($query);
        }

        return $this;
    }

    /**
     * @param array $joins
     */
    public function createAndAttachJoins(array $joins = [])
    {
        foreach ($joins as $schema) {

            $join = new Join($schema);

            $this->joins()->save($join);
        }
    }

    public function attachJoins(array $ids = [])
    {
        $this->joins()->attach($ids);

        return $this;
    }
}
