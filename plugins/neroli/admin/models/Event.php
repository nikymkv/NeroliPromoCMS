<?php namespace Neroli\Admin\Models;

use Model;

/**
 * Model
 */
class Event extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'neroli_admin_events';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $belongsTo = [
        'catEvent' => [
            'neroli\admin\models\CatEvent',
            'key' => 'cat_event_id',
            'otherKey' => 'id',
            'order' => 'title',
        ],
    ];

    public $attachMany = [
        'event_photos' => 'System\Models\File'
    ];
}
