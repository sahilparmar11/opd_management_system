'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

export type AppData = {
  patients: any[];
  doctors: any[];
  hospitals: any[];
  treatmentTypes: any[];
  subTreatmentTypes: any[];
  diagnosisTypes: any[];
  opds: any[];
  receipts: any[];
  users: any[];
};

type DataContextType = {
  data: AppData | null;
  loading: boolean;
  refreshData: (background?: boolean) => Promise<void>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshData = useCallback(async (background = false) => {
    if (!background) setLoading(true);
    try {
      const res = await fetch(`/api/data?t=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error('Failed to fetch context data', err);
    } finally {
      if (!background) setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, refreshData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
