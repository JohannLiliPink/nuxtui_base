export const useBonds = () => { 

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

  return {

		login,

  }

}