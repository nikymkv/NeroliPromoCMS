<?php namespace Neroli\Admin\Models;

use Model;

/**
 * Model
 */
class HeaderSlider extends Model
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
    public $table = 'neroli_admin_header_slider';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
    
    public $attachOne = [
        'image' => 'System\Models\File',
    ];
}
