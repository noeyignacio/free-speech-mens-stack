import app from './config/server.js';
import './config/database.js';

const port = app.get('port');

// Utilities
import { SU_LP001 } from './utils/_messages.js';

// Connect to Local Port
try {
    app.listen(port, () => {
        console.log(`${SU_LP001}`);
    })
} catch (error) {
    console.log(error.message);
}