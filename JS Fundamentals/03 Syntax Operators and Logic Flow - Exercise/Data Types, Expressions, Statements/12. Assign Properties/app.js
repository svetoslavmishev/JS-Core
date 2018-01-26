function assignProperties([arg1, arg2, arg3, arg4, arg5, arg6]) {

    let student = { [arg1]: arg2, [arg3]: arg4, [arg5]: arg6 };

    console.log(student);
}
assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);

