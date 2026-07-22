import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeatherForecast } from '../services/weatherService';
import { WeatherForecastResponse } from '../types/weather';
import axios from 'axios';

// estado global clima ---

type Language = 'en' | 'es';

interface WeatherState {
  data: WeatherForecastResponse | null;
  loading: boolean;
  error: string | null;
  lang: Language;
  selectedCity: string;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  lang: 'en',
  selectedCity: 'London',
};

// obtiene la previsión meteorológica ---

export const getWeather = createAsyncThunk<
  WeatherForecastResponse,
  { city: string; lang: string },
  { rejectValue: string }
>(
  'weather/getWeather',
  async ({ city, lang }, thunkAPI) => {
    try {
      return await fetchWeatherForecast(city, lang);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ?? error.message ?? ' error';
        return thunkAPI.rejectWithValue(String(message));
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

// Slice

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.lang = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },
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
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export const { setLanguage, setCity } = weatherSlice.actions;
export default weatherSlice.reducer;