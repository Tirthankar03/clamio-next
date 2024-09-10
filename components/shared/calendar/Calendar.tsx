'use client';

import React from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar, Button, DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate, setIsDialogOpen, setCustomEvents, setRange, setPlan1Count, setPlan2Count } from '@/utils/calendarSlice';
const { RangePicker } = DatePicker;

interface EventData {
  type: string;
  content: string;
}

const getListData = (date: Dayjs, customEvents: Record<string, EventData[]>): EventData[] => {
    if (!date || typeof date.format !== 'function') {
      return []; // Return an empty array if date is not a valid Dayjs object
    }
  
    const defaultEvents: Record<number, EventData[]> = {
      8: [
        { type: 'warning', content: 'This is a warning event.' },
        { type: 'success', content: 'This is a usual event.' }
      ],
      10: [
        { type: 'warning', content: 'This is a warning event.' },
        { type: 'success', content: 'This is a usual event.' },
        { type: 'error', content: 'This is an error event.' }
      ],
      15: [
        { type: 'warning', content: 'This is a warning event' },
        { type: 'success', content: 'This is a very long usual event......' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' }
      ]
    };
  
    const dateKey = date.format('YYYY-MM-DD'); // Now safe to use format() after the check
    const defaultList = defaultEvents[date.date()] || [];
    const customList = customEvents[dateKey] || [];
  
    return [...defaultList, ...customList];
  };
  

const ServiceCalendar: React.FC = () => {
  const dispatch = useDispatch();
  
  const {
    selectedDate,
    isDialogOpen,
    customEvents,
    range,
    plan1Count,
    plan2Count
  } = useSelector((state) => state.serviceCalendar);

  const handleDateClick = (value: Dayjs) => {
    dispatch(setSelectedDate(value));
    dispatch(setIsDialogOpen(true));
  };

  const handleRangeSelect = (dates: [Dayjs | null, Dayjs | null]) => {
    dispatch(setRange(dates));
  };

  const handleSaveRange = () => {
    if (!range[0] || !range[1]) return;

    const newEvents: Record<string, EventData[]> = { ...customEvents };
    let current = range[0];

    while (current.isBefore(range[1]) || current.isSame(range[1])) {
      const dateKey = current.format('YYYY-MM-DD');
      if (!newEvents[dateKey]) {
        newEvents[dateKey] = [];
      }
      if (plan1Count > 0) {
        newEvents[dateKey].push({ type: 'custom', content: `Plan 1 - count = ${plan1Count}` });
      }
      if (plan2Count > 0) {
        newEvents[dateKey].push({ type: 'custom', content: `Plan 2 - count = ${plan2Count}` });
      }

      current = current.add(1, 'day');
    }

    dispatch(setCustomEvents(newEvents));
    dispatch(setRange([null, null]));
    dispatch(setPlan1Count(0));
    dispatch(setPlan2Count(0));
  };

  const monthCellRender = (value: Dayjs) => {
    const num = value.month() === 8 ? 1394 : null;
    return num ? (
      <div>
        <div>{num}</div>
        <div>Backlog number</div>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value, customEvents);
    return (
      <ul>
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current: Dayjs, info: { type: string; originNode: any; }) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return (
    <>
      <Calendar onSelect={handleDateClick} cellRender={cellRender} />

      <Dialog open={isDialogOpen} onOpenChange={(isOpen) => dispatch(setIsDialogOpen(isOpen))}>
        <DialogContent className='bg-white'>
        <DialogHeader>
            {/* Check if selectedDate exists before calling format */}
            <DialogTitle>
              Details for {selectedDate && typeof selectedDate === 'object' && selectedDate !== null && 'format' in selectedDate
                ? selectedDate.format('YYYY-MM-DD')
                : 'No Date Selected'}
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="plan">
            <TabsList>
              <TabsTrigger value="plan">Plan</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>

            <TabsContent value="plan">
              <DialogDescription>
                {selectedDate && (
                  <div className='flex flex-col gap-5 text-black'>
                    {getListData(selectedDate, customEvents).length > 0 ? (
                      getListData(selectedDate, customEvents).map((event, index) => (
                        <div key={index} className='p-5 bg-slate-300'>
                          {event.content}
                        </div>
                      ))
                    ) : (
                      <div>No plan today</div>
                    )}
                    <div className='p-5 bg-yellow-300 rounded-md shadow-sm'>Add new plans</div>
                  </div>
                )}
              </DialogDescription>
            </TabsContent>

            <TabsContent value="custom">
              <DialogDescription>
                <div className='flex flex-col gap-5'>
                  <h1 className='font-extrabold text-white decoration-teal-700'>Add appointment</h1>
                  <RangePicker onChange={(dates) => handleRangeSelect(dates as [Dayjs | null, Dayjs | null])} />

                  <div className='flex flex-col gap-5 text-black'>
                    <div className='flex justify-between items-center p-5 bg-slate-300'>
                      <span>Plan 1</span>
                      <div className='flex items-center'>
                        <Button onClick={() => dispatch(setPlan1Count(plan1Count - 1))} disabled={plan1Count <= 0}>-</Button>
                        <span className='mx-2'>{plan1Count}</span>
                        <Button onClick={() => dispatch(setPlan1Count(plan1Count + 1))}>+</Button>
                      </div>
                    </div>
                    <div className='flex justify-between items-center p-5 bg-slate-300'>
                      <span>Plan 2</span>
                      <div className='flex items-center'>
                        <Button onClick={() => dispatch(setPlan2Count(plan2Count - 1))} disabled={plan2Count <= 0}>-</Button>
                        <span className='mx-2'>{plan2Count}</span>
                        <Button onClick={() => dispatch(setPlan2Count(plan2Count + 1))}>+</Button>
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleSaveRange}>Save range</Button>
                </div>
              </DialogDescription>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceCalendar;
