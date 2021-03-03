<?php namespace Neroli\Admin\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class FooterInfoController extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Neroli.Admin', 'main-menu-item', 'footer-info-menu-item');
    }
}
