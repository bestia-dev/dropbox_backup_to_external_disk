var searchIndex = JSON.parse('{\
"dropbox_backup_to_external_disk":{"doc":"dropbox_backup_to_external_disk lib.rs","t":[3,3,13,3,3,3,13,4,3,3,12,12,12,12,12,12,12,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,5,5,5,5,5,5,5,0,5,5,5,5,5,5,5,5,5,5,5,5,0,12,12,13,13,4,5,5,5,11,11,5,5,5,11,11,11,11,11,11,11,5,5,5,5,5,5,5,5,5,5,5,11,11,11,12,12,3,11,11,12,12,12,11,11,5,5,5,11,11,5,11,11,11,5,5,5,11,5,5,5,11,11,11,3,3,3,3,3,3,3,12,12,12,12,12,12,12,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,5,5,5,5,5,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["CLEAR_ALL","CLEAR_LINE","Client","GREEN","RED","RESET","RemoteBasePath","RemoteKind","UNHIDE_CURSOR","YELLOW","__private_field","__private_field","__private_field","__private_field","__private_field","__private_field","__private_field","add2_just_downloaded_to_list_local","add_just_downloaded_to_list_local","all_list_remote_and_local","at_line","byte_pos_from_chars","compare2_lists","compare_lists","compare_lists_internal","copy_from_list2_for_download","correct_time_from_list","download_from_list","download_one_file","get_pos","get_short_lived_access_token","list2_local","list_and_sync","list_local","list_remote","list_remote_folder","local_mod","move_or_rename_local_files","ns_elapsed","ns_print_ms","ns_print_ns","ns_start","press_enter_to_continue_timeout_5_sec","remote_content_hash","remote_mod","save2_base_path","save_base_path","second_backup","shorten_string","sort_remote_list_and_write_to_file","sort_string_lines","start_hide_cursor_terminal","sync_only","test_connection","trash2_from_list","trash_from_list","trash_from_list_internal","utils_mod","client","remote_base_local_path","Client","RemoteBasePath","RemoteKind","add2_just_downloaded_to_list_local","add_just_downloaded_to_list_local","add_just_downloaded_to_list_local_internal","borrow","borrow_mut","copy_from_list2_for_download","correct_time_from_list","correct_time_from_list_internal","deref","deref_mut","drop","from","get_content_hash","init","into","list2_local","list_local","list_local_internal","move_internal","move_or_rename_local_files","move_or_rename_local_files_internal","save2_base_path","save_base_path","trash2_from_list","trash_from_list","trash_from_list_internal","try_from","try_into","type_id","client","remote_base_local_path","DirectoryIterator","borrow","borrow_mut","buffer","client","cursor","deref","deref_mut","download_from_list","download_internal","download_one_file","drop","from","get_short_lived_access_token","init","into","into_iter","list_directory","list_remote","list_remote_folder","next","remote_content_hash","sort_remote_list_and_write_to_file","test_connection","try_from","try_into","type_id","CLEAR_ALL","CLEAR_LINE","GREEN","RED","RESET","UNHIDE_CURSOR","YELLOW","__private_field","__private_field","__private_field","__private_field","__private_field","__private_field","__private_field","at_line","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","byte_pos_from_chars","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","drop","drop","drop","drop","drop","drop","drop","from","from","from","from","from","from","from","get_pos","init","init","init","init","init","init","init","initialize","initialize","initialize","initialize","initialize","initialize","initialize","into","into","into","into","into","into","into","ns_elapsed","ns_print_ms","ns_print_ns","ns_start","press_enter_to_continue_timeout_5_sec","shorten_string","sort_string_lines","start_hide_cursor_terminal","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id"],"q":["dropbox_backup_to_external_disk","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","dropbox_backup_to_external_disk::RemoteKind","","dropbox_backup_to_external_disk::local_mod","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","dropbox_backup_to_external_disk::local_mod::RemoteKind","","dropbox_backup_to_external_disk::remote_mod","","","","","","","","","","","","","","","","","","","","","","","","","","","dropbox_backup_to_external_disk::utils_mod","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["ansi clear all","ansi clear line","","ansi color","ansi color","ansi reset color","","The source file can be on dropbox or on external disk …","ansi unhide cursor","ansi color","","","","","","","","add just downloaded files to list_local (from external …","add just downloaded files to list_local (from dropbox …","all list remote and local","move cursor to line","it is used for substring, because string slice are …","compare list: the lists and produce list2_for_download, …","compare list: the lists and produce list_for_download, …","compare list: the lists must be already sorted for this …","copies files from external disk backup_1 to backup_2","modify the date od files from list_for_correct_time","download files from list","download one file","get cursor position from raw_mode, but return immediately …","get token from env variable","for second backup: list all local files and folders. It …","list and sync is the complete process for backup in one …","list all local files and folders. It can take some time.","get remote list in parallel first get the first level of …","list remote folder","Module contains all functions for local external disk.","Files are often moved or renamed After compare, the same …","returns the elapsed nanoseconds","print elapsed time in milliseconds and returns the new …","print elapsed time in nanoseconds and returns the new now …","returns the now in nanoseconds","waits 5 seconds for the user to press any key then …","get content_hash from remote","Module contains all the communication with the remote …","saves the base local path for later use like “…","saves the base local path for later use like “…","After the first backup from dropbox, we want to make a …","shorten path for screen to avoid word-wrap","sort and write to file","sort string lines case insensitive","when changing cursor position it is good to hide the …","sync_only can be stopped with ctrl+c and then restarted …","test authentication with dropbox.com","Move to trash folder the files from list_for_trash. …","Move to trash folder the files from list_for_trash. …","internal","A module with often used functions.","","","","","The source file can be on dropbox or on external disk …","add just downloaded files to list_local (from external …","add just downloaded files to list_local (from dropbox …","add lines from just_downloaded to list_local. Only before …","","","copies files from external disk backup_1 to backup_2","modify the date od files from list_for_correct_time","modify the date od files from list_for_correct_time","","","","","2 different ways of getting the content_hash it depends …","","","for second backup: list all local files and folders. It …","list all local files and folders. It can take some time.","list all local files and folders. It can take some time.","internal code to move file","Files are often moved or renamed After compare, the same …","internal function","saves the base local path for later use like “…","saves the base local path for later use like “…","Move to trash folder the files from list_for_trash. …","Move to trash folder the files from list_for_trash. …","internal","","","","","","iterator for Directory on remote Dropbox storage","","","","","","","","download files from list","download one file with client object UserAuthDefaultClient","download one file","","","get token from env variable","","","","list directory","get remote list in parallel first get the first level of …","list remote folder","","get content_hash from remote","sort and write to file","test authentication with dropbox.com","","","","ansi clear all","ansi clear line","ansi color","ansi color","ansi reset color","ansi unhide cursor","ansi color","","","","","","","","move cursor to line","","","","","","","","","","","","","","","it is used for substring, because string slice are …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","get cursor position from raw_mode, but return immediately …","","","","","","","","","","","","","","","","","","","","","","returns the elapsed nanoseconds","print elapsed time in milliseconds and returns the new …","print elapsed time in nanoseconds and returns the new now …","returns the now in nanoseconds","waits 5 seconds for the user to press any key then …","shorten path for screen to avoid word-wrap","sort string lines case insensitive","when changing cursor position it is good to hide the …","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,1,0,0,0,1,0,0,0,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,10,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,9,10,0,11,11,11,11,11,11,11,0,0,0,11,11,0,11,11,11,0,0,0,11,0,0,0,11,11,11,0,0,0,0,0,0,0,2,3,4,5,6,7,8,0,2,3,4,5,6,7,8,2,3,4,5,6,7,8,0,2,2,3,3,4,4,5,5,6,6,7,7,8,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,0,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[["str",15]]],[[["u16",15]],["string",3]],[[["usize",15],["str",15]],["usize",15]],[[]],[[]],[[["str",15]]],[[["str",15]]],[[]],[[]],[[["str",15]]],[[["hidecursor",3]]],[[],["authorization",3]],[[["str",15]]],[[["str",15]]],[[["str",15]]],[[]],[[["sender",3],["bool",15],["str",15],["u16",15],["userauthdefaultclient",3],["i32",15]]],null,[[]],[[["i64",15]],["i64",15]],[[["i64",15],["str",15]],["i64",15]],[[["i64",15],["str",15]],["i64",15]],[[["str",15]],["i64",15]],[[]],[[["userauthdefaultclient",3],["str",15]],[["string",3],["option",4]]],null,[[["str",15]]],[[["str",15]]],[[["str",15]]],[[["str",15],["u16",15]],["string",3]],[[["vec",3],["string",3]]],[[["str",15]],["string",3]],[[],[["hidecursor",3],["rawterminal",3]]],[[]],[[]],[[]],[[]],[[["str",15]]],null,null,null,null,null,null,[[]],[[]],[[["str",15]]],[[]],[[]],[[["str",15]]],[[]],[[["remotekind",4],["str",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[["str",15]],["string",3]],[[],["usize",15]],[[]],[[["str",15]]],[[["str",15]]],[[["str",15]]],[[["path",3],["str",15]]],[[]],[[["remotekind",4],["str",15]]],[[["str",15]]],[[["str",15]]],[[]],[[]],[[["str",15]]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,[[]],[[]],null,null,null,[[["usize",15]]],[[["usize",15]]],[[]],[[["sender",3],["u16",15],["str",15],["userauthdefaultclient",3],["i32",15]]],[[["str",15]]],[[["usize",15]]],[[]],[[],["authorization",3]],[[],["usize",15]],[[]],[[]],[[["userauthdefaultclient",3],["bool",15],["str",15]],[["result",4],["result",6]]],[[]],[[["sender",3],["bool",15],["str",15],["u16",15],["userauthdefaultclient",3],["i32",15]]],[[],["option",4]],[[["userauthdefaultclient",3],["str",15]],[["string",3],["option",4]]],[[["vec",3],["string",3]]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["u16",15]],["string",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["usize",15],["str",15]],["usize",15]],[[["usize",15]]],[[],["string",3]],[[["usize",15]]],[[],["string",3]],[[],["string",3]],[[["usize",15]]],[[],["string",3]],[[["usize",15]]],[[],["string",3]],[[["usize",15]]],[[],["string",3]],[[["usize",15]]],[[["usize",15]]],[[],["string",3]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["hidecursor",3]]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["i64",15]],["i64",15]],[[["i64",15],["str",15]],["i64",15]],[[["i64",15],["str",15]],["i64",15]],[[["str",15]],["i64",15]],[[]],[[["str",15],["u16",15]],["string",3]],[[["str",15]],["string",3]],[[],[["hidecursor",3],["rawterminal",3]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]]],"p":[[4,"RemoteKind"],[3,"GREEN"],[3,"YELLOW"],[3,"RED"],[3,"RESET"],[3,"CLEAR_LINE"],[3,"CLEAR_ALL"],[3,"UNHIDE_CURSOR"],[13,"Client"],[13,"RemoteBasePath"],[3,"DirectoryIterator"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};