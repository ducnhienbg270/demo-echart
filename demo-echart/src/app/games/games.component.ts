import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  games = [
    {
      // title: "Don't Click the Red Button",
      title: 'Bạn muốn Tăng Lương',
      description: "A simple game... or is it? Try not to click the red button!",
      route: '/games/red-button',
      icon: '🔴',
      difficulty: 'Easy'
    },
    {
      title: 'Nấu Sườn Nướng Mật Ong',
      description: 'Trở thành đầu bếp chuyên nghiệp! Ướp và nướng sườn để phục vụ khách hàng.',
      route: '/games/cooking',
      icon: '🍖',
      difficulty: 'Medium'
    },
    {
      title: 'Ghép Hình',
      description: 'Upload ảnh và ghép lại các mảnh trước khi hết giờ! Thử thách trí nhớ và tốc độ.',
      route: '/games/puzzle',
      icon: '🧩',
      difficulty: 'Medium'
    },
    {
      title: 'Mini Fighting Game',
      description: 'Đấu 1 vs 1 với AI! Sử dụng đấm và đá để hạ gục đối thủ.',
      route: '/games/fighting',
      icon: '👊',
      difficulty: 'Hard'
    },
    {
      title: 'Mini Shooting Game',
      description: 'Bắn hạ enemy, né đạn và sống sót! Thu thập power-ups và đạt điểm cao.',
      route: '/games/shooting',
      icon: '🚀',
      difficulty: 'Hard'
    },
    {
      title: 'Coming Soon',
      description: 'More games will be added here!',
      route: '#',
      icon: '🎮',
      difficulty: 'TBA'
    }
  ];
}

// Made with Bob
