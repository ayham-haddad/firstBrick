console.log(process.argv)

var output = 0;

for (var i = 2; i < process.argv.length; i++) {
	output = output + +process.argv[i];
}

	process.stdout.write(output)
