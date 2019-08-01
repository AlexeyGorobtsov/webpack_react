const CustomError = require('./custom-error');

export const GET = req => Promise.resolve({ name: 'Rio de Janeiro' });
export const POST = req => throw new Error('Some unexpected error');
export const DELETE = req => throw new Error('The city you are trying to delete could not be found');
export const PATH = req => {
    try {
        // example for catching
        throw new Error('Some internal error')
    } catch (e) {
        console.error(e);

        throw new CustomError(
            'CITY NOT EDITABLE',
            400,
            'The city you are trying to edit is not editable'
        )
    }
};