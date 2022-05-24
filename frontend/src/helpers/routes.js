const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    tutors: '/tutors',
    tutor: (tutorId) => tutorId ? `/tutors/:${tutorId}` : '/tutors/:tutorId',
    services: '/services',
    service: (serviceId) => serviceId ? `/services/:${serviceId}` : '/services/:serviceId',
    panel: {
        profile: '/panel/profile',
        courses: '/panel/courses'
    }
};

export default routes;