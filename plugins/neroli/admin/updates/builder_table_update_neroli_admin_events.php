<?php namespace Neroli\Admin\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNeroliAdminEvents extends Migration
{
    public function up()
    {
        Schema::table('neroli_admin_events', function($table)
        {
            $table->integer('cat_event_id');
        });
    }
    
    public function down()
    {
        Schema::table('neroli_admin_events', function($table)
        {
            $table->dropColumn('cat_event_id');
        });
    }
}
