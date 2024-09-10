/**
 * Providers to wrap the application to provide the store and other providers.
 */
import { Provider } from 'react-redux';
import store from '../lib/store';

const Providers = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      {children}
    </Provider>
);

export default Providers;
