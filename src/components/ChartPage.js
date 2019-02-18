import React from 'react';
import Highcharts from 'highcharts';
import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Legend, ColumnSeries, AreaSeries, PieSeries, Tooltip } from 'react-jsx-highcharts';

const ChartPage = () => {

	const categories = ['CHART1', 'CHART2', 'CHART3', 'CHART4', 'CHART5'];

	// plotOptions
	const plotOptions = {
		series: { // 막대차트 병합
			stacking: 'normal'
		},
		pie: { // 도넛차트 옵션
			dataLabels: { // 라벨 차트 안으로 삽입
				enabled: true,
				distance: -50,
				style: {
					fontWeight: 'bold',
					color: 'white'
				}
			}
		}
	};

	const pieData = [
		{
			name: 'DATA1',
			y: 58.9
		},
		{
			name: 'DATA2',
			y: 13.29
		},
		{
			name: 'DATA3',
			y: 15
		},
		{
			name: 'DATA4',
			y: 3.78
		},
		{
			name: 'DATA5',
			y: 7
		}
	];

	return (
		<div>
			<div className='row'>
				<div className='box-1'>
					<strong>Chart. 1 - LINE CHART</strong>
					<HighchartsChart className='box-shadow'>
						<Chart />
						<Legend align='right' floating='true' backgroundColor='#fff' verticalAlign='top' layout='vertical' borderColor='#ccc' borderWidth='1' />
						<XAxis categories={ categories }  />
						<YAxis>
							<AreaSeries name="DATA1" data= {[null, 20, 40, 5, 40]} />
							<AreaSeries name="DATA2" data= {[53, 55, 5, 37, 25]} />
							<AreaSeries name="DATA3" data= {[34, 4, 75, 24, 4]} />
							<AreaSeries name="DATA4" data= {[26, 45, 35, 15, 38]} />
							<AreaSeries name="DATA5" data= {[13, 28, 65, 64, 13]} />
						</YAxis>
					</HighchartsChart>
				</div>
				<div className='box-2'>
					<strong>Chart. 2 - PIE CHART</strong>
					<HighchartsChart plotOptions={plotOptions} className='box-shadow'>
						<Chart />
						<Tooltip pointFormat='{series.name}: <b>{point.percentage}</b>'/>
						<Legend align='right' floating='true' backgroundColor='#fff' verticalAlign='top' layout='vertical' borderColor='#ccc' borderWidth='1' />
						<YAxis>
							<PieSeries name='Value' data= { pieData } showInLegend={true} innerSize='50%'  />
						</YAxis>
					</HighchartsChart>
				</div>
			</div>
			<div className='row'>
				<div className='box-3'>
					<strong>Chart. 3 - BAR CHART</strong>
					<HighchartsChart plotOptions={plotOptions} className='box-shadow'>
						<Chart  />
						<Legend align='right' floating='true' backgroundColor='#fff' verticalAlign='top' layout='vertical' borderColor='#ccc' borderWidth='1' />
						<XAxis categories={ categories }  />
						<YAxis>
							<ColumnSeries name='DATA1' data={[10, 2, 1, 3, 4]} />
							<ColumnSeries name='DATA2' data={[2, 3, 5, 7, 6]} />
						</YAxis>
					</HighchartsChart>
				</div>
				<div className='box-3'>
					<strong>Chart. 3 - BAR CHART</strong>
					<HighchartsChart plotOptions={plotOptions} className='box-shadow'>
						<Chart  />
						<Legend align='right' floating='true' backgroundColor='#fff' verticalAlign='top' layout='vertical' borderColor='#ccc' borderWidth='1' />
						<XAxis categories={ categories }  />
						<YAxis>
							<ColumnSeries name='DATA1' data={[10, 2, 1, 3, 4]} />
							<ColumnSeries name='DATA2' data={[2, 3, 5, 7, 6]} />
							<ColumnSeries name='DATA3' data={[4, 3, 3, 9, 0]} />
							<ColumnSeries name='DATA4' data={[13, 15, 6, 5, 8]} />
						</YAxis>
					</HighchartsChart>
				</div>
				<div className='box-3'>
					<strong>Chart. 3 - BAR CHART</strong>
					<HighchartsChart plotOptions={plotOptions} className='box-shadow'>
						<Chart  />
						<Legend align='right' floating='true' backgroundColor='#fff' verticalAlign='top' layout='vertical' borderColor='#ccc' borderWidth='1' />
						<XAxis categories={ categories }  />
						<YAxis>
							<ColumnSeries name='DATA1' data={[10, 2, 1, 3, 4]} />
							<ColumnSeries name='DATA2' data={[2, 3, 5, 7, 6]} />
							<ColumnSeries name='DATA3' data={[4, 3, 3, 9, 0]} />
							<ColumnSeries name='DATA4' data={[21, 15, 6, 5, 8]} />
							<ColumnSeries name='DATA5' data={[7, 8, 9, 12, 1]} />
							<ColumnSeries name='DATA6' data={[9, 5, 4, 17, 4]} />
							<ColumnSeries name='DATA7' data={[5, 8, 2, 8, 6]} />
							<ColumnSeries name='DATA8' data={[1, 11, 18, 4, 5]} />
						</YAxis>
					</HighchartsChart>
				</div>
			</div>
		</div>
	);
};


export default withHighcharts(ChartPage, Highcharts);