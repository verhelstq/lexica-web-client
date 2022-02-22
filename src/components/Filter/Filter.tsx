import React, { useState, useEffect, Component } from "react";
import FilterItemType, { RuleType } from "../../types/FilterItemType";
import OperatorType from "../../types/OperatorType";
import { FilterRow } from "./FilterRow";

interface FilterProps {
    fields: Array<string>;
    operators: Array<OperatorType>;
}

export const Filter = (props: FilterProps) => {
    const [filters, setFilters] = useState<FilterItemType[]>([]);

    const addFilterItem = () => {
        const newFilters = { combinator: "and", id: Math.random().toString(16).slice(2), rules: [] } as FilterItemType
        setFilters([...filters, newFilters]);
    }


    const updateFilters = (filterItem: FilterItemType) => {
        let newFilters = [...filters];
        const index = filters.findIndex((f) => f.id == filterItem.id);
        newFilters[index] = filterItem;
        if (filterItem.rules.length == 0) {
            newFilters = newFilters.filter((f) => f.id !== newFilters[index].id)
        }
        setFilters(newFilters);
    }

    const drawFilters = () => {
        return filters.map((f, index) => {
            return <FilterRow key={index}
                id={filters[index].id}
                combinators={index == 0 ? ["Where"] : ["and", "or"]}
                filterItem={f}
                fields={props.fields}
                operators={props.operators}
                updateFilters={updateFilters}
                filterId={f.id}
                setFilters={setFilters}
                amountOfFilterRows={filters.length} />
        })
    }

    return (
        <>
            <div className="flex flex-row justify-center items-center h-screen">
                <div className="rounded-lg bg-white dark:bg-slate-900 min-w-1/4 max-w-1/4 border-solid border-blue-900 border-2 p-2">
                    <div className="flex flex-col">
                        <p className="font-sans text-slate-400 font-medium text-lg p-2">In this view, show records</p>
                        <div>{filters.length > 0 && drawFilters()}</div>
                        <div className="flex flex-row">
                            <button className="flex flex-row items-center" onClick={() => addFilterItem()}><svg style={{ height: 30, width: 30 }}
                                xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                                <p className="font-sans text-slate-400 font-medium text-md p-2 m-1">Add filter</p></button>

                        </div>
                        {filters.length > 0 && <button onClick={() => console.log(filters)} className="float-right bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-2">
                            Execute Query
                        </button>}
                    </div >
                </div>
                <pre className="m-4 bg-white dark:bg-slate-800 text-black dark:text-slate-200 rounded overflow-y-scroll h-96 w-80">
                    {JSON.stringify(filters, null, 4)}
                </pre>
            </div>
        </>
    )
}