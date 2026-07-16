import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeatherData, WeatherInfo } from '../services/weatherService';

interface WeatherState {
  data: WeatherInfo | null;
  loading: boolean;
  error: string | null;
  lang: 'en' | 'es';
  selectedCity: string;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  lang: 'en',
  selectedCity: 'London', 
};

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async ({ city, lang }: { city: string; lang: string }, thunkAPI) => {
    try {
      return await fetchWeatherData(city, lang);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'es'>) => {
      state.lang = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { setLanguage, setCity } = weatherSlice.actions;
export default weatherSlice.reducer;