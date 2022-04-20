<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Usuarios</h1>

    <ul>
        @forelse ($users as $u)
            <li>{{ $u->name }}</li>
        @empty
            <li>Nenhum usuário</li>
        @endforelse
    </ul>
</body>
</html>
