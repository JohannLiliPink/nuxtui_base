export const useTheme = () => { 

  const store_theme = useThemeAdminStore();

  const login = async () => {
		try {
			const data = await $fetch('/api/user', {
				method: 'POST',
				body: user
			})
			
			if (data.isAdmin) {
				userAdmin.value = true;
			} else {
				userAdmin.value = false;
			}
			setUser(data.user);
			return data;
		} catch (err) {
			return null
		}
  }


  function menuActive( btn_id )
  {

    console.log( 'TEXT:::useTheme - Menu' , store_theme.btn_menu_active.from )
    const paragraph = document.getElementById('menu_btn_'+btn_id );

    paragraph.classList.add('shadow-soft-xl');

    paragraph.classList.add('rounded-lg');
    paragraph.classList.add('bg-white');
    paragraph.classList.add('font-semibold');
    paragraph.classList.add('text-slate-700');

    const bgicon = document.getElementById('menu_div_'+btn_id );

    bgicon.classList.add('bg-gradient-to-tl');      
    bgicon.classList.add( 'from-' + store_theme.btn_menu_active.from );
    bgicon.classList.add('to-' + store_theme.btn_menu_active.to );

    const icon = document.getElementById('menu_ico_'+btn_id );
    icon.classList.remove('text-slate-800');
    icon.classList.add('text-white');

  }

  return {

		login,
    menuActive

  }

}