import app from './app';

import testConection from './database/testConection';


app.listen(process.env.PORT || 3000);

testConection.init();