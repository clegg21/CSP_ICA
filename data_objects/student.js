function student(id, enrolment, firstName, lastName, email) {
    this.id = id;
    this.enrolment = enrolment;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    this.getId = function () {
      return this.id;
    };

    this.setId = function (id) {
        this.id = id;
    };

    this.getEnrolment = function () {
      return this.enrolment;
    };

    this.setEnrolment = function (enrolment) {
        this.enrolment = enrolment;
    };

    this.getFirstName = function () {
      return this.firstName;
    };

    this.setFirstName = function (firstName) {
        this.firstName = firstName;
    };

    this.getLastName = function () {
      return this.lastName;
    };

    this.setLastName = function (lastName) {
        this.lastName = lastName;
    };

    this.getEmail = function () {
      return this.email;
    };

    this.setEmail = function (email) {
        this.email = email;
    };

};
