function component() {
    var element = document.createElement('div');

    // Lodash, current included via a script, is required for this line to work.
    element.innerHTML = _join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
