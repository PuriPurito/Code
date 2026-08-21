<MENU-ENTRY TITLE="##ms_tools.get_const('f1kd1ajeh5')##" ACTION="
			try
			{
				_doc_array = List.SelRows;
			}
			catch ( e )
			{
				_doc_array = Screen.FindItem( 'ViewGrid' ).SelRows;
			}
			if ( ArrayOptFirstElem( _doc_array ) == undefined )
				Cancel();

			newObj = tools.new_doc_by_name( loop_entry_name, false ).TopElem;
			_files_flag = newObj.ChildExists( 'files' );
			fRoleExists = false;
			try
			{
				newObj.role_id.Add();
				fRoleExists = true;
			}
			catch ( err )
			{
			}

			fldPackage = package_objects.GetChildByKey( local_settings.package_id );
			var bApplyToAll = false;
			var bAddFiles = _files_flag;
			var bAddRoles = fRoleExists;
			var bAddSections = false;
			oParam = ( { 'add_files': false, 'add_roles': false, 'add_sections': false, 'add_foreign_elem_objects': false, 'apply_to_all': false, 'multi_select': ( ArrayCount( _doc_array ) > 1 ) } );
			bError = false;
			for ( _doc in _doc_array )
			{
				try
				{
					_docEnv = _doc.Env.ListElem;
					_pk = _doc.Env.ListElem.PrimaryKey;
					_le_name = _doc.Env.ListElem.Name;
				}
				catch ( derw )
				{
					_docEnv = eval( '_doc.Env._' + loop_entry_name );
					_pk = eval( '_doc.Env._' + loop_entry_name ).PrimaryKey;
					_le_name = loop_entry_name;
				}
				oRes = tools.add_object_to_package( null, _pk, Screen, fldPackage, oParam );
				if( oRes.error == 0 )
				{
					oParam = oRes.params;
				}
				else
				{
					ActiveScreen.MsgBox( oRes.message, ms_tools.get_const('c_error'), 'error', 'ok' );
					bError = true;
					break;
				}
			}
			if( !bError )
			{
				ActiveScreen.MsgBox( 'Объекты добавлены в пакет.', ms_tools.get_const('7ey6j94yku'), 'info' );
			}
			package_objects.Doc.Save();
			UpdateScreens( '*', '*view_main*' );
			UpdateScreens( '*', '*package_objects*' );
		" ENABLE-EXPR="
			if ( loop_entry_name != 'custom_report' )
				return true;

			try
			{
				Screen.FindItem( 'ViewGrid' ).SelRow.Env.ListElem;
				return true;
			}
			catch ( err )
			{
				return false;
			}
	" PASSIVE="1" WEB-ID-EXPR="'add_package_menu_adddoc'"/>