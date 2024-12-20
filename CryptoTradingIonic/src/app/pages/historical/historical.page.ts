import { Component } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { FilterModalComponent } from 'src/app/shared-components/filter-modal/filter-modal.component';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.page.html',
  styleUrls: ['./historical.page.scss'],
})
export class HistoricalPage {
  presentPopover: any;
  constructor(
    private menuCtrl: MenuController,
    private popoverCtrl: PopoverController
  ) {}

  signals = [
    {
      "pair": "BTC/USDT",
      "type": "Buy",
      "entryPrice": "27500 - 27600",
      "takeProfit": ["27800", "28000", "28500"],
      "stopLoss": "27350",
      "riskRewardRatio": "3:1",
      "volume": "2%",
      "timeframe": "1H",
      "reason": "Soporte clave en $27,500 con RSI en sobreventa",
      "date": "2024-12-18T10:30:00Z",
      "educator": "CryptoGuru",
      "status": "Open"
    },
    {
      "pair": "ETH/USDT",
      "type": "Sell",
      "entryPrice": "1750 - 1760",
      "takeProfit": ["1730", "1700", "1680"],
      "stopLoss": "1775",
      "riskRewardRatio": "2.5:1",
      "volume": "3%",
      "timeframe": "4H",
      "reason": "Rechazo en resistencia con divergencia bajista en MACD",
      "date": "2024-12-18T09:00:00Z",
      "educator": "TradingBotPro",
      "status": "Open"
    },
    {
      "pair": "BNB/USDT",
      "type": "Buy",
      "entryPrice": "210 - 212",
      "takeProfit": ["215", "220", "225"],
      "stopLoss": "208",
      "riskRewardRatio": "4:1",
      "volume": "1.5%",
      "timeframe": "1D",
      "reason": "Zona de acumulación en soporte semanal",
      "date": "2024-12-17T15:00:00Z",
      "educator": "DailySignals",
      "status": "Open"
    },
    {
      "pair": "XRP/USDT",
      "type": "Sell",
      "entryPrice": "0.65 - 0.66",
      "takeProfit": ["0.63", "0.61", "0.58"],
      "stopLoss": "0.67",
      "riskRewardRatio": "3.2:1",
      "volume": "2%",
      "timeframe": "2H",
      "reason": "Patrón de doble techo confirmado en resistencia",
      "date": "2024-12-18T08:45:00Z",
      "educator": "SignalMaster",
      "status": "Open"
    },
    {
      "pair": "SOL/USDT",
      "type": "Buy",
      "entryPrice": "20.00 - 20.50",
      "takeProfit": ["21.00", "22.00", "23.00"],
      "stopLoss": "19.50",
      "riskRewardRatio": "5:1",
      "volume": "2%",
      "timeframe": "1H",
      "reason": "Rebote técnico tras consolidación en soporte diario",
      "date": "2024-12-17T21:30:00Z",
      "educator": "ProCryptoSignals",
      "status": "Closed"
    }
  ];



  expandedSignalId: number | null = null;

  toggleDetails(signalId: number): void {
    this.expandedSignalId = this.expandedSignalId === signalId ? null : signalId;
  }


  minDate = '2020-01-01';
  maxDate = '2025-12-31';

  educators = ['John Doe', 'Jane Smith'];

  openmenu() {
    this.menuCtrl.enable(true, 'main-Id');
    this.menuCtrl.open('main-Id');
  }

  async openFilters(event: any) {
    const popover = await this.popoverCtrl.create({
      component: FilterModalComponent,
      event: event,
      translucent: true,
    });

    await popover.present();
  }

}
