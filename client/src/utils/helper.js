export const getInitials = (name) => {
  if (!name) return '';
    const nameParts = name.split(' ');
    const firstNameInitial = nameParts[0] ? nameParts[0][0] : '';
    const lastNameInitial = nameParts[1] ? nameParts[1][0] : '';
    return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
  };
  // or 
  export const stringAvatar = (name) => {
    return {
        children:  name ?`${name.split(' ')[0]?.[0] || ''} ${name.split(' ')[1]?.[0] || ''}` : '',
  }
}

